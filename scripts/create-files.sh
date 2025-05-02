#!/usr/bin/env bash
set -euo pipefail

# Default options
FOLDER=""
NO_THEME=false
PARAMS=()

# Parse options
while [[ $# -gt 0 ]]; do
  case "$1" in
    --folder=*)
      FOLDER="${1#*=}"
      shift
      ;;
    --noTheme)
      NO_THEME=true
      shift
      ;;
    --help|-h)
      echo "Usage: $0 [--folder=DIR] [--noTheme] <ComponentNamePascalCase>"
      exit 0
      ;;
    -* )
      echo "Error: Unknown option: $1" >&2
      exit 1
      ;;
    * )
      PARAMS+=("$1")
      shift
      ;;
  esac

done

# Ensure exactly one positional argument remains
if [[ ${#PARAMS[@]} -ne 1 ]]; then
  echo "Error: Component name is required." >&2
  echo "Usage: $0 [--folder=DIR] [--noTheme] <ComponentNamePascalCase>" >&2
  exit 1
fi
COMP_NAME="${PARAMS[0]}"

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

# Create directories
mkdir -p "$COMP_DIR"
mkdir -p "$STORY_DIR"

# Create component files
touch "$COMP_DIR/$KEBAB.component.ts"
touch "$COMP_DIR/$KEBAB.component.html"

# Optionally create theme file
if [[ "$NO_THEME" != true ]]; then
  touch "$COMP_DIR/theme.ts"
fi

# Create story files
touch "$STORY_DIR/$KEBAB.stories.ts"
touch "$STORY_DIR/$KEBAB.stories.html"

# Summary
echo "✅ Created files for '$COMP_NAME':"
echo "🗳️ Component files:"
echo "  • $COMP_DIR/$KEBAB.component.ts"
echo "  • $COMP_DIR/$KEBAB.component.html"
if [[ "$NO_THEME" != true ]]; then
  echo "  • $COMP_DIR/theme.ts"
fi
echo "📚 Story files:"
echo "  • $STORY_DIR/$KEBAB.stories.ts"
echo "  • $STORY_DIR/$KEBAB.stories.html"
