#!/usr/bin/env bash
set -uo pipefail

# Downloads non-exact-match TikTok candidates and organizes them into:
#   replacement-candidates/<Category>/<Service>/<id>-<slug>.mp4
# A cache directory is used so each unique TikTok ID is only downloaded once.
# Re-runnable: existing files in cache are reused.

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/replacement-candidates"
CACHE="$ROOT/.tiktok-cache"
BASE_URL="https://www.tiktok.com/@britneethebarber2/video"

mkdir -p "$CACHE"

# Format: Category|Service|TikTokID|short-slug
ENTRIES=(
  # === Stitch / straight-back braids (replacing feed-in-braids.mp4) ===
  "Braids|Stitch Braids (4-12)|7602845401141611806|wash-blow-trim-stitch-braids"
  "Braids|2 Stitch Braids|7553425056056003870|haircut-2-braid-combo"
  "Braids|2 Braids with Hair Added|7553425056056003870|haircut-2-braid-combo"
  "Braids|12-20 Straight Back Braids|7608080873736523039|half-braids-new-look"
  "Braids|4 Straight Back (Stitch)|7602845401141611806|wash-blow-trim-stitch-braids"
  "Braids|5 Straight Back (Stitch)|7602845401141611806|wash-blow-trim-stitch-braids"
  "Braids|8 Straight Back (Stitch)|7608080873736523039|half-braids-new-look"
  "Braids|10-12 Straight Back (Stitch)|7608080873736523039|half-braids-new-look"
  "Braids|4 Stitches (Crisscrossed)|7553425056056003870|haircut-2-braid-combo"
  "Braids|4 Cornrows|7553425056056003870|haircut-2-braid-combo"
  "Braids|6 Cornrows|7602845401141611806|wash-blow-trim-stitch-braids"
  "Braids|8 Cornrows|7608080873736523039|half-braids-new-look"
  "Braids|Cornrows with Half Braids Singles|7530493700451912991|half-braids-with-sew-in"

  # === Men's design braids ===
  "Men's Braids|Men Design Braids|7601187507736169758|braid-design-for-men-1"
  "Men's Braids|Designed Freestyle Braids|7573434500286303518|braid-design-for-men-2"
  "Men's Braids|Designed Freestyle Braids|7523299841569525022|asap-rocky-freestyle-braids"
  "Men's Braids|Straight Backs (Men)|7573176256674434334|braid-design-for-men-3"
  "Men's Braids|Natural Hair Singles (Men)|7300099198668524843|men-braids"
  "Men's Braids|Natural Hair Singles (Men)|7617569808380480798|mens-braids-1"
  "Men's Braids|Natural Hair Singles (Men)|7616612033760365854|mens-braids-quick-style"

  # === Braid maintenance / touch-up ===
  "Chemical & Add-ons|Braid Touch Up (Entire Perimeter)|7472932543306665247|need-braids-natural-hair-grow"
  "Chemical & Add-ons|Braid Down for Wig|7618845364661062942|braid-design-with-haircut"
  "Chemical & Add-ons|Need Help Parting|7594186327367128351|braid-design-1"
  "Chemical & Add-ons|Need Help Parting|7598975951665466655|braid-design-2"
  "Chemical & Add-ons|Need Help Parting|7579677691394264350|braid-design-3"

  # === Small knotless / tribal / fulani ===
  "Braids|Small Knotless Singles|7583918003775884575|singles"
  "Braids|Small Knotless Singles|7539089341910387999|singles-4-5-hours"
  "Braids|XSmall Tribal Braids w- Designs|7583209503659789599|knotless-boho-singles"
  "Braids|Small Tribal Braids|7265854018533215534|singles-cousin"
  "Braids|Small Tribal Braids w- Designs|7562763919723400479|boho-knotless-singles"
  "Braids|Fulani (Small-Med Knotless)|7196068346435996970|braids-curly-human-hair"
  "Braids|Fulani Versatile + Small-Med|7583918003775884575|singles"

  # === Medium knotless / medium tribal / fulani medium ===
  "Braids|Medium Knotless|7571697114284035359|large-medium-knotless-singles"
  "Braids|Medium Tribal Braids|7571697114284035359|large-medium-knotless-singles"
  "Braids|Fulani Medium Knotless|7562763919723400479|boho-knotless-singles"
  "Braids|Fulani Versatile + Medium Knotless|7583209503659789599|knotless-boho-singles"

  # === Two-strand twist / natural hair ===
  "Natural Hair|Two Strand Twist (Natural Hair)|7602002524035370270|small-two-strand-twist"
  "Natural Hair|Two Strand Twist with Design|7586891045820960030|fulani-two-strand-twist"
  "Natural Hair|Touch Up Natural Hairstyles|7585717732876799262|wash-twist-style"
  "Natural Hair|Touch Up Natural Hairstyles|7527138580829900063|natural-hair-2yr-trim-press"
  "Natural Hair|Curls Only|7582771127425010975|passion-twist-1"
  "Natural Hair|Curls Only|7523754969250549022|passion-twist-2"
  "Natural Hair|Two Strand Twist w- Hair Added|7295769493178027307|two-strand-twist"
  "Natural Hair|Natural Curl Setting|7552390308273687838|natural-hair-for-the-win"

  # === Locs (excluding the exact-match Retwist already done) ===
  "Locs & Dreadlocks|Loc Maintenance - Touch Up|7614017381249174814|wash-retwist-haircut"
  "Locs & Dreadlocks|Loc Maintenance - Touch Up|7556785722687098142|loc-maintenance-fade"
  "Locs & Dreadlocks|Loc Maintenance - Touch Up|7559002177709100319|wash-retwist-style-cut"
  "Locs & Dreadlocks|Locs w- Tool|7608401466813893918|detox-retwist-style"
  "Locs & Dreadlocks|Locs w- Tool|7547197375752736030|dreads-style-retwist"
  "Locs & Dreadlocks|Barrel Twist Style on Locs|7621474060895145247|wicked-out"

  # === Pixie / women's cuts ===
  "Cuts & Barbering|Women's Haircut|7583913975876717855|womens-hair-cut"
  "Cuts & Barbering|Women's Haircut|7514579014942477599|womens-haircut-short"
  "Cuts & Barbering|Women Line Up w- Fade (Back)|7535256567252307231|women-haircut-eyebrow-wax"

  # === Half-up / weaves ===
  "Weaves & Extensions|Half Up Half Down with Swoop|7608080873736523039|half-braids-new-look"
  "Weaves & Extensions|Half Up Half Down Quick Weave|7608080873736523039|half-braids-new-look"

  # === Quick weave variants ===
  "Weaves & Extensions|Creative Style Quick Weave|7614978169170398495|wig-install"
  "Weaves & Extensions|Quick Weave w- Style|7537511588291530015|wig-installation-eyebrows"
  "Weaves & Extensions|2 Braids x Quick Weave|7573175507211128095|sew-in"

  # === Empty folders (services with no original video) ===
  "Braids|Tribal Braids|7196068346435996970|braids-curly-human-hair"
  "Braids|Fulani Braids|7586891045820960030|fulani-two-strand-twist"
  "Braids|Cornrows (4-8 braids)|7553425056056003870|haircut-2-braid-combo"
  "Ponytails & Updos|Knot Bun|7534825206901165342|ponytail"

  "Cuts & Barbering|Beard Line Up|7601302112147868959|taper-line-mens-haircut"
  "Cuts & Barbering|Men Haircut + Beard|7621474756121873695|mens-haircuts-1"
  "Cuts & Barbering|Men Haircut + Beard|7548701024773557534|mens-haircut-1"
  "Cuts & Barbering|Taper & Line Up|7583158848605752607|mens-taper-line-up"
  "Cuts & Barbering|Taper & Line Up|7601302112147868959|taper-line-mens-haircut"
  "Cuts & Barbering|Line Up Only|7556875427994766622|line-up-style"
  "Cuts & Barbering|Haircut - Razor Line Up|7548701024773557534|mens-haircut-1"
  "Cuts & Barbering|Student Haircuts|7621474756121873695|mens-haircuts-1"

  "Cuts & Barbering|Trim (half inch ends)|7558612854459403550|trim-silk-press"
)

# First pass: build set of unique IDs and download to cache
declare -A unique_ids
for entry in "${ENTRIES[@]}"; do
  IFS='|' read -r _ _ id _ <<< "$entry"
  unique_ids[$id]=1
done

echo "Unique TikTok IDs to fetch: ${#unique_ids[@]}"
echo ""

i=0
total=${#unique_ids[@]}
for id in "${!unique_ids[@]}"; do
  i=$((i + 1))
  if [[ -f "$CACHE/$id.mp4" ]]; then
    echo "[$i/$total] CACHED $id"
    continue
  fi
  echo "[$i/$total] Downloading $id ..."
  if yt-dlp -q --no-warnings -f "best[vcodec!=none]/best" -o "$CACHE/$id.mp4" "$BASE_URL/$id" 2>&1; then
    if ffprobe -v error -show_entries stream=codec_type -of csv=p=0 "$CACHE/$id.mp4" | grep -q video; then
      echo "         OK"
    else
      echo "         AUDIO-ONLY (slideshow), skipping"
      rm -f "$CACHE/$id.mp4"
      touch "$CACHE/$id.audio-only"
    fi
  else
    echo "         FAILED"
  fi
done

echo ""
echo "Copying into service folders..."
copies=0
skips=0
for entry in "${ENTRIES[@]}"; do
  IFS='|' read -r category service id slug <<< "$entry"
  src="$CACHE/$id.mp4"
  if [[ ! -f "$src" ]]; then
    skips=$((skips + 1))
    continue
  fi
  dest_dir="$OUT/$category/$service"
  mkdir -p "$dest_dir"
  cp "$src" "$dest_dir/${id}-${slug}.mp4"
  copies=$((copies + 1))
done

echo ""
echo "Done. $copies files copied into $OUT, $skips entries skipped (audio-only or failed)."
