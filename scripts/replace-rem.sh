#!/usr/bin/env bash
# convert-px-to-rem.sh
# Recursively find .ts and .html files and convert text-[Npx] and text-[Npx]/[Mpx] to rem units (1rem = 16px)

BASE=16

DIR="${1:-.}"

find "$DIR" -type f \( -name '*.ts' -o -name '*.html' \) -print0 | \
while IFS= read -r -d '' file; do
  perl -i -pe '
    s{
      text-\[(\d+)px\](?:/\[(\d+)px\])?
    }{
      my $r1 = sprintf("%.4g", $1/'"$BASE"');
      my $out = "text-[" . $r1 . "rem]";
      if (defined $2) {
        my $r2 = sprintf("%.4g", $2/'"$BASE"');
        $out .= "/[" . $r2 . "rem]";
      }
      $out
    }gex
  ' "$file" && echo "✔ Updated $file"
done
