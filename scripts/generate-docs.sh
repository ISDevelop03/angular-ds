#!/usr/bin/env bash
set -euo pipefail

# tweak these if your tree is different
COMPONENTS_DIR="projects/design-system/src/lib/components"
DEMO_DIR="documentation/demo"

mkdir -p "$DEMO_DIR"

# find every component file, no matter how deep
find "$COMPONENTS_DIR" -type f -name '*.component.ts' | while IFS= read -r comp_file; do
  # derive folder name as the component "slug"
  comp="$(basename "$(dirname "$comp_file")")"
  title="$(tr '[:lower:]' '[:upper:]' <<< "${comp:0:1}")${comp:1}Component"
  demo_filename="ds-${comp}.component.html"

  # only inject if we haven't already
  if grep -q "<example-url>/demo/${demo_filename}</example-url>" "$comp_file"; then
    echo "✔️  JSDoc already in $comp_file"
  else
    # prepare a JS-friendly JSDoc block
    jsdoc="/**\n * ${title}\n *\n * Live demo:\n * <example-url>/demo/${demo_filename}</example-url>\n */"

    # use awk to insert it just before the first @Component
    awk -v js="$jsdoc" '
      BEGIN { n = split(js, lines, "\n") }
      $0 ~ /@Component/ && !inserted {
        for (i=1; i<=n; i++) print lines[i]
        inserted=1
      }
      { print }
    ' "$comp_file" > "${comp_file}.tmp" && mv "${comp_file}.tmp" "$comp_file"

    echo "✅ Injected JSDoc into $comp_file"
  fi

  # now spit out the demo page
  out="$DEMO_DIR/$demo_filename"
  cat > "$out" <<EOF
<iframe
  data-src-dev="http://localhost:4200/${comp}"
  data-src-prod="https://example.com/${comp}"
  frameborder="0"
  style="width: 100%; height: 100%"
></iframe>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const isLocal =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";

    document.querySelectorAll("iframe[data-src-dev]").forEach((iframe) => {
      const devUrl = iframe.getAttribute("data-src-dev");
      const prodUrl = iframe.getAttribute("data-src-prod");
      iframe.src = isLocal ? devUrl : prodUrl;
    });
  });
</script>
EOF

  echo "✅ Created demo page: $out"
done
