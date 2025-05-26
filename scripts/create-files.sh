#!/usr/bin/env bash
set -euo pipefail

# detect GNU vs BSD sed for the inplace flag
if sed --version >/dev/null 2>&1; then
  SED_OPTS=(-i)
else
  SED_OPTS=(-i '')
fi

# Default options
FOLDER=""
NO_THEME=false
REMOVE=false
PARAMS=()

# Parse options
while [[ $# -gt 0 ]]; do
  case "$1" in
    --folder=*) FOLDER="${1#*=}"; shift ;;  # optional subfolder
    --noTheme) NO_THEME=true; shift ;;         # skip theme file
    --remove)  REMOVE=true; shift ;;           # remove mode
    --help|-h)
      echo "Usage: $0 [--folder=DIR] [--noTheme] [--remove] <ComponentNamePascalCase>"
      exit 0
      ;;
    -*) echo "Error: Unknown option: $1" >&2; exit 1;;
    *) PARAMS+=("$1"); shift ;;                # component name
  esac
done

# Ensure exactly one positional argument remains
if [[ ${#PARAMS[@]} -ne 1 ]]; then
  echo "Error: Component name is required." >&2
  echo "Usage: $0 [--folder=DIR] [--noTheme] [--remove] <ComponentNamePascalCase>" >&2
  exit 1
fi
COMP_NAME="${PARAMS[0]}"

# Convert PascalCase to kebab-case
KEBAB=$(echo "$COMP_NAME" \
  | sed -r 's/([A-Z])/-\L\1/g' \
  | sed 's/^-//')

# Derive CLASS_NAME by capitalizing each segment of kebab-case
IFS='-' read -r -a parts <<< "$KEBAB"
CLASS_NAME=""
for segment in "${parts[@]}"; do
  first_char="${segment:0:1}"
  rest_chars="${segment:1}"
  uppercase_first=$(printf '%s' "$first_char" | tr '[:lower:]' '[:upper:]')
  CLASS_NAME+="${uppercase_first}${rest_chars}"
done

# Compute directory prefix (trim trailing slash)
if [[ -n "$FOLDER" ]]; then
  PREFIX="${FOLDER%/}/"
else
  PREFIX=""
fi

# Directories
COMP_DIR="projects/design-system/src/lib/components/${PREFIX}${KEBAB}"
STORY_DIR="projects/demo-app/src/app/stories/${PREFIX}${KEBAB}"
STORIES_INDEX="projects/demo-app/src/app/stories/index.ts"
MODULE_FILE="projects/design-system/src/lib/design-system.module.ts"
APP_MODULE="projects/demo-app/src/app/app.module.ts"
CONFIG_FILE="projects/demo-app/src/app/config.ts"

# Removal flow
if [[ "$REMOVE" == true ]]; then
  echo "🗑  Removing component '$COMP_NAME'..."
  rm -rf "$COMP_DIR" "$STORY_DIR"
  sed "${SED_OPTS[@]}" -e "/\/\/ Auto-export for ${KEBAB} stories/,+1d" "$STORIES_INDEX"
  sed "${SED_OPTS[@]}" -e "/${CLASS_NAME}Component,/d" "$MODULE_FILE"
  sed "${SED_OPTS[@]}" -e "/${CLASS_NAME}StoryComponent,/d" "$APP_MODULE"
  sed "${SED_OPTS[@]}" -e "/{ path: '${KEBAB}', component: ${CLASS_NAME}StoryComponent },/d" "$APP_MODULE"
  sed "${SED_OPTS[@]}" -e "/{ key: '${KEBAB}', name: '${CLASS_NAME}', path: '\/${KEBAB}' },/d" "$CONFIG_FILE"
  echo "✅ Component '$COMP_NAME' removed."
  exit 0
fi

# Create directories
mkdir -p "$COMP_DIR"
mkdir -p "$STORY_DIR"

echo "✅ Creating files for '$COMP_NAME'..."

# 1) Component TS
cat > "$COMP_DIR/$KEBAB.component.ts" <<EOF
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ds-$KEBAB',
  templateUrl: './$KEBAB.component.html',
})
export class ${CLASS_NAME}Component {
  @Input() className?: string = '';
}
EOF

# 2) Component HTML
cat > "$COMP_DIR/$KEBAB.component.html" <<EOF
<div id="ds-$KEBAB" [ngClass]="className">
  <p>$KEBAB works!</p>
</div>
EOF

# 3) theme.ts (optional)
if [[ "$NO_THEME" != true ]]; then
  cat > "$COMP_DIR/theme.ts" <<EOF
// theme definitions for ${CLASS_NAME}Component
export const theme = {
  default: {
    /* add your theme tokens here */
  }
};
EOF
fi

# 4) Story TS
cat > "$STORY_DIR/$KEBAB.stories.ts" <<EOF
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-$KEBAB',
  templateUrl: './$KEBAB.stories.html',
})
export class ${CLASS_NAME}StoryComponent {
  @Input() label: string = '$COMP_NAME';
  @Input() className?: string = '';
}
EOF

# 5) Story HTML
cat > "$STORY_DIR/$KEBAB.stories.html" <<EOF
<section class="flex flex-col gap-4 p-4">
  <h2 class="text-2xl font-bold">${CLASS_NAME}</h2>
  <div class="flex flex-col gap-4">
    <ds-$KEBAB className="max-w-[300px] bg-red-100/50"></ds-$KEBAB>
    <ds-$KEBAB className="max-w-[300px] bg-blue-100/50"></ds-$KEBAB>
    <ds-$KEBAB className="max-w-[300px] bg-green-100/50"></ds-$KEBAB>
  </div>
</section>

EOF

# Summary
echo "✅ Created & populated files for '$COMP_NAME':"
echo "🗳️ Component files:"
echo "  • $COMP_DIR/$KEBAB.component.ts"
echo "  • $COMP_DIR/$KEBAB.component.html"
if [[ "$NO_THEME" != true ]]; then
  echo "  • $COMP_DIR/theme.ts"
fi
echo "📚 Story files:"
echo "  • $STORY_DIR/$KEBAB.stories.ts"
echo "  • $STORY_DIR/$KEBAB.stories.html"



# 7) Append to stories index
if ! grep -qxF "export * from './${PREFIX}${KEBAB}/${KEBAB}.stories';" "$STORIES_INDEX"; then
  echo "" >> "$STORIES_INDEX"
  echo "// Auto-export for $KEBAB stories" >> "$STORIES_INDEX"
  echo "export * from './${PREFIX}${KEBAB}/${KEBAB}.stories';" >> "$STORIES_INDEX"
  echo "🔌 Appended export to $STORIES_INDEX"
fi


# 10) Update app.module.ts - import the story component
if ! grep -q "${CLASS_NAME}StoryComponent" "$APP_MODULE"; then
  sed "${SED_OPTS[@]}" -e "/} from '\.\/stories'/i\\
  ${CLASS_NAME}StoryComponent,\\
  " "$APP_MODULE"
  echo "🔌 Imported ${CLASS_NAME}StoryComponent in app.module.ts"
fi

# Add route for the story component
PAGE_LINE="{ path: '$KEBAB', component: ${CLASS_NAME}StoryComponent },"
if ! grep -qxF "$PAGE_LINE" "$APP_MODULE"; then
  sed "${SED_OPTS[@]}" -e "/{ path: '\*\*', component: NotFoundComponent }/i\\
  $PAGE_LINE" "$APP_MODULE"
  echo "🔌 Added page route for '$KEBAB' in app.module.ts"
fi

# Add story component to app.module.ts declarations array
if ! grep -q "${CLASS_NAME}StoryComponent," "$APP_MODULE"; then
  # Create a temporary file for the module updates
  TEMP_FILE=$(mktemp)
  
  # Read the app.module.ts content
  awk -v component="${CLASS_NAME}StoryComponent," '
  /declarations: \[/ {
    in_declarations = 1
  }
  /^[[:space:]]*]/ && in_declarations {
    print "    " component
    in_declarations = 0
  }
  { print }
  ' "$APP_MODULE" > "$TEMP_FILE"
  
  # Replace the original file with our modified one
  mv "$TEMP_FILE" "$APP_MODULE"
  
  echo "🔌 Declared ${CLASS_NAME}StoryComponent in app.module.ts"
fi

# Update design-system.module.ts - import the component
if ! grep -q "import { ${CLASS_NAME}Component }" "$MODULE_FILE"; then
  # compute the relative path for this component
  IMPORT_PATH="./components/${PREFIX}${KEBAB}/${KEBAB}.component"
  # insert the import right after the CommonModule import
  sed "${SED_OPTS[@]}" -e "/import { CommonModule }/a\\
import { ${CLASS_NAME}Component } from '${IMPORT_PATH}';" "$MODULE_FILE"
  echo "🔌 Imported ${CLASS_NAME}Component from '${IMPORT_PATH}' in design-system.module.ts"
 
  
  # Add to declarations array
  TEMP_FILE=$(mktemp)
  awk -v component="${CLASS_NAME}Component," '
  /declarations: \[/ {
    in_declarations = 1
  }
  /^[[:space:]]*]/ && in_declarations {
    print "    " component
    in_declarations = 0
  }
  { print }
  ' "$MODULE_FILE" > "$TEMP_FILE"
  mv "$TEMP_FILE" "$MODULE_FILE"
  echo "🔌 Declared ${CLASS_NAME}Component in design-system.module.ts"
  
  # Add to exports array
  TEMP_FILE=$(mktemp)
  awk -v component="${CLASS_NAME}Component," '
  /exports: \[/ {
    in_exports = 1
  }
  /^[[:space:]]*]/ && in_exports {
    print "    " component
    in_exports = 0
  }
  { print }
  ' "$MODULE_FILE" > "$TEMP_FILE"
  mv "$TEMP_FILE" "$MODULE_FILE"
  echo "🔌 Exported ${CLASS_NAME}Component in design-system.module.ts"
fi

# 11) Append to config.ts menu
MENU_LINE="{ key: '$KEBAB', name: '$CLASS_NAME', path: '/$KEBAB' },"
if ! grep -qxF "$MENU_LINE" "$CONFIG_FILE"; then
  # Create a temporary file for the config updates
  TEMP_FILE=$(mktemp)
  
  # Read the config.ts content and add the menu item before the closing bracket
  awk -v menu_line="  $MENU_LINE" '
  /export const menus/ {
    in_menus = 1
  }
  /];/ && in_menus {
    print menu_line
    in_menus = 0
  }
  { print }
  ' "$CONFIG_FILE" > "$TEMP_FILE"
  
  # Replace the original file with our modified one
  mv "$TEMP_FILE" "$CONFIG_FILE"
  
  echo "🔌 Added menu item for '$KEBAB' in config.ts"
fi

echo "✅ Done. '$COMP_NAME' processed."