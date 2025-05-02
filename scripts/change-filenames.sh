#!/usr/bin/env bash
set -euo pipefail

# Directory containing your story files (and nested subdirectories)
STORY_DIR="src/app/stories"

# Check that the directory exists
if [[ ! -d "$STORY_DIR" ]]; then
  echo "Error: directory '$STORY_DIR' does not exist." >&2
  exit 1
fi

# Find all files under STORY_DIR whose names contain ".component."
# and rename them in place, swapping ".component." → ".stories."
find "$STORY_DIR" -type f -name '*.component.*' -print0 |
while IFS= read -r -d '' file; do
  dir=$(dirname "$file")
  base=$(basename "$file")
  newbase="${base/.component./.stories.}"
  newpath="$dir/$newbase"

  # If target already exists, warn and skip
  if [[ -e "$newpath" ]]; then
    echo "Warning: target '$newpath' already exists; skipping '$file'"
    continue
  fi

  mv -- "$file" "$newpath"
  echo "Renamed '$file' → '$newpath'"
done
