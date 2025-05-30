#!/usr/bin/env bash
#
# extract-ds-selectors.sh
# Finds all Angular selectors starting with ds- in .ts files,
# strips off the 'ds-' prefix, deduplicates, and writes them
# one-per-line into ds-list.txt next to this script.

# Directory to scan (defaults to current dir)
ROOT="${1:-.}"

# Directory where this script lives
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Output file
OUT="$DIR/ds-list.txt"

# Extract, strip prefix, dedupe, and write to file
find "$ROOT" -type f -name '*.ts' -print0 \
  | xargs -0 grep -Eh "selector\s*:\s*['\"]ds-[^'\"]+['\"]" \
  | sed -E "s/selector:\s*['\"]ds-([^'\"]+)['\"],?/\1/" \
  | sort -u \
  > "$OUT"

echo "✔︎ Written $(wc -l < "$OUT") selectors to $OUT"
