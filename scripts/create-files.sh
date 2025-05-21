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
    --folder=*) FOLDER="${1#*=}"; shift ;;
    --noTheme)  NO_THEME=true;      shift ;;
    --remove)   REMOVE=true;        shift ;;
    --help|-h)
      echo "Usage: $0 [--folder=DIR] [--noTheme] [--remove] <ComponentNamePascalCase>"
      exit 0
      ;;
    -*)
      echo "Error: Unknown option: $1" >&2
      exit 1 ;;
    *)
      PARAMS+=("$1"); shift ;;
  esac
done

# Ensure exactly one positional argument remains
if [[ ${#PARAMS[@]} -ne 1 ]]; then
  echo "Error: Component name is required." >&2
  echo "Usage: $0 [--folder=DIR] [--noTheme] <ComponentNamePascalCase>" >&2
  exit 1
fi
COMP_NAME="${PARAMS[0]}"

# POSIX-safe: uppercase only the first character
first_char="$(printf '%s' "$COMP_NAME" | cut -c1 | tr '[:lower:]' '[:upper:]')"
rest_chars="${COMP_NAME#?}"
CLASS_NAME="${first_char}${rest_chars}"

# Convert PascalCase to kebab-case
KEBAB=$(echo "$COMP_NAME" \
  | sed -r 's/([A-Z])/-\L\1/g' \
  | sed 's/^-//')

# Compute directory prefix (trim trailing slash)
if [[ -n "$FOLDER" ]]; then
  PREFIX="${FOLDER%/}/"
else
  PREFIX=""
fi

# Directories
COMP_DIR="projects/design-system/src/lib/components/${PREFIX}$KEBAB"
STORY_DIR="src/app/stories/${PREFIX}$KEBAB"
COMP_INDEX="projects/design-system/src/lib/components/index.ts"
STORIES_INDEX="src/app/stories/index.ts"
MODULE_FILE="projects/design-system/src/lib/design-system.module.ts"
PUBLIC_API="projects/design-system/src/public-api.ts"
APP_MODULE="src/app/app.module.ts"
CONFIG_FILE="src/app/config.ts"


if [[ "$REMOVE" == "true" ]]; then
  echo "🗑  Removing component '$COMP_NAME'..."

  # 1) delete files & folders
  rm -rf "$COMP_DIR" "$STORY_DIR"

  # 2) remove from components index
  sed "${SED_OPTS[@]}" -e "/\/\/ Auto-export for ${KEBAB} component/,+1d" "$COMP_INDEX"

  # 3) remove from stories index
  sed "${SED_OPTS[@]}" -e "/\/\/ Auto-export for ${KEBAB} stories/,+1d" "$STORIES_INDEX"

  # 4) remove from public-api
  sed "${SED_OPTS[@]}" -e "/\/\/ Auto-export for ${KEBAB} component/,+1d" "$PUBLIC_API"

  # 5) remove from design-system.module.ts
  sed "${SED_OPTS[@]}" -e "/${CLASS_NAME}Component,/d" "$MODULE_FILE_DS"

  # 6) remove from app.module.ts
  sed "${SED_OPTS[@]}" -e "/${CLASS_NAME}StoryComponent,/d" "$APP_MODULE"
  sed "${SED_OPTS[@]}" -e "/{ path: '${KEBAB}', component: ${CLASS_NAME}StoryComponent },/d" "$APP_MODULE"

  # 7) remove from config.ts
  sed "${SED_OPTS[@]}" -e "/{ key: '${KEBAB}', name: '${CLASS_NAME}', path: '\/${KEBAB}' },/d" "$CONFIG_FILE"

  echo "✅ Component '$COMP_NAME' removed."
  exit 0
fi


# Create directories
mkdir -p "$COMP_DIR"
mkdir -p "$STORY_DIR"

# 1) Component TS
cat > "$COMP_DIR/$KEBAB.component.ts" <<EOF
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ds-$KEBAB',
  templateUrl: './$KEBAB.component.html',
})
export class ${CLASS_NAME}Component {
  @Input() label: string = '$COMP_NAME';
  @Input() className?: string = '';
}
EOF

# 2) Component HTML
cat > "$COMP_DIR/$KEBAB.component.html" <<EOF
<div class="">
  <span>{{ label }}</span>
  <p>$KEBAB works!</p>
  <ng-content></ng-content>
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
<ds-$KEBAB [label]="'Storybook HTML Example'">
  <strong>Inline HTML story content</strong>
</ds-$KEBAB>
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


# 6) Append to component index
echo "" >> "$COMP_INDEX"
echo "// Auto-export for $KEBAB component" >> "$COMP_INDEX"
echo "export * from './${PREFIX}${KEBAB}/${KEBAB}.component';" >> "$COMP_INDEX"
echo "🔌 Appended export to $COMP_INDEX"

# 7) Append to stories index
echo "" >> "$STORIES_INDEX"
echo "// Auto-export for $KEBAB stories" >> "$STORIES_INDEX"
echo "export * from './${PREFIX}${KEBAB}/${KEBAB}.stories';" >> "$STORIES_INDEX"
echo "🔌 Appended export to $STORIES_INDEX"


# 9) Append to public-api.ts (components)
{
  echo
  echo "// Auto-export for $KEBAB component"
  echo "export * from './lib/components/${PREFIX}${KEBAB}/${KEBAB}.component';"
} >> "$PUBLIC_API"

echo "🔌 Appended export to $PUBLIC_API"

echo "✅ All files created and indexes + module + public API updated for '$COMP_NAME'."




# a) import the new component
sed "${SED_OPTS[@]}" \
    -e "/} from '\.\/components'/i\\
  ${CLASS_NAME}Component," \
    "$MODULE_FILE"

# b) add to declarations
sed "${SED_OPTS[@]}" \
    -e "/declarations: \[/,/]/ {/\]/i\\
    ${CLASS_NAME}Component,
}" \
    "$MODULE_FILE"

# c) add to exports
sed "${SED_OPTS[@]}" \
    -e "/exports: \[/,/]/ {/\]/i\\
    ${CLASS_NAME}Component,
}" \
    "$MODULE_FILE"

echo "🔌 Imported & declared ${CLASS_NAME}Component in $MODULE_FILE"

# 10) Update src/app/app.module.ts

# a) import the new story component
sed "${SED_OPTS[@]}" \
  -e "/} from '\.\/stories'/i\\
  ${CLASS_NAME}StoryComponent," \
  "$APP_MODULE"

# 10b) insert into pages[] immediately before the NotFound route
sed "${SED_OPTS[@]}" \
  -e "/{ path: '\*\*', component: NotFoundComponent }/i\\
  { path: '$KEBAB', component: ${CLASS_NAME}StoryComponent }," \
  "$APP_MODULE"

# c) add to declarations
sed "${SED_OPTS[@]}" \
  -e "/declarations: \[/,/]/ {/\]/i\\
    ${CLASS_NAME}StoryComponent,
}" \
  "$APP_MODULE"

echo "🔌 Added ${CLASS_NAME}StoryComponent import, page route, and declaration in $APP_MODULE"



sed "${SED_OPTS[@]}" \
  -e "/export const menus:.*\[/,/\];/ { /\];/i\\
  { key: '$KEBAB', name: '$CLASS_NAME', path: '/$KEBAB' },
}" \
  "$CONFIG_FILE"

echo "🔌 Added menu item for '$KEBAB' in $CONFIG_FILE"


