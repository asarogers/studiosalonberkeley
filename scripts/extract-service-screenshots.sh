#!/usr/bin/env bash
set -euo pipefail

# Extract 5 screenshots (at 1s, 2s, 3s, 4s, 5s) from each service's video and place them
# inside public/<Category>/<Service>/<Service>{1,2,3,4,5}.jpg.
# Re-runnable: existing screenshots are overwritten.

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PUB="$ROOT/public"
VID="$PUB/videos/menu"

# Format: Category|Service folder|Video filename
ENTRIES=(
  "Locs & Dreadlocks|Retwist|loc-retwist.mp4"
  "Locs & Dreadlocks|Loc Maintenance - Touch Up|loc-retwist.mp4"
  "Locs & Dreadlocks|Locs w- Tool|loc-retwist.mp4"
  "Locs & Dreadlocks|Starter Dreads|starter-locs.mp4"
  "Locs & Dreadlocks|Instant Locs|instant-locs.mp4"
  "Locs & Dreadlocks|Retwist (Kids 4-12)|kids-braids.mp4"
  "Locs & Dreadlocks|Dread Detox|dread-detox.mp4"
  "Locs & Dreadlocks|Barrel Twist Style on Locs|two-strand-twist.mp4"

  "Natural Hair|Silk Press|silk-press.mp4"
  "Natural Hair|Silk Press (Kids 4-10)|kids-silk-press.mp4"
  "Natural Hair|Natural Hair Singles|natural-singles.mp4"
  "Natural Hair|Curls Only|two-strand-twist.mp4"
  "Natural Hair|Touch Up Natural Hairstyles|two-strand-twist.mp4"
  "Natural Hair|Two Strand Twist w- Hair Added|two-strand-twist.mp4"
  "Natural Hair|Two Strand Twist (Natural Hair)|two-strand-twist.mp4"
  "Natural Hair|Two Strand Twist with Design|two-strand-twist.mp4"

  "Braids|Large Knotless Braids|large-knotless.mp4"
  "Braids|Medium Knotless|knotless-braids.mp4"
  "Braids|Small Knotless Singles|small-knotless.mp4"
  "Braids|Cornrows with Half Braids Singles|small-knotless.mp4"
  "Braids|4 Straight Back (Stitch)|feed-in-braids.mp4"
  "Braids|5 Straight Back (Stitch)|feed-in-braids.mp4"
  "Braids|6 Straight Back (Stitch)|feed-in-braids.mp4"
  "Braids|8 Straight Back (Stitch)|feed-in-braids.mp4"
  "Braids|10-12 Straight Back (Stitch)|feed-in-braids.mp4"
  "Braids|2 Stitch Braids|feed-in-braids.mp4"
  "Braids|4 Stitches (Crisscrossed)|feed-in-braids.mp4"
  "Braids|XSmall Tribal Braids w- Designs|small-knotless.mp4"
  "Braids|Small Tribal Braids|small-knotless.mp4"
  "Braids|Small Tribal Braids w- Designs|small-knotless.mp4"
  "Braids|Medium Tribal Braids|knotless-braids.mp4"
  "Braids|Fulani (Small-Med Knotless)|small-knotless.mp4"
  "Braids|Fulani Medium Knotless|knotless-braids.mp4"
  "Braids|Fulani Versatile + Small-Med|small-knotless.mp4"
  "Braids|Fulani Versatile + Medium Knotless|knotless-braids.mp4"
  "Braids|4 Cornrows|feed-in-braids.mp4"
  "Braids|6 Cornrows|feed-in-braids.mp4"
  "Braids|8 Cornrows|feed-in-braids.mp4"
  "Braids|12-20 Straight Back Braids|feed-in-braids.mp4"
  "Braids|2 Braids with Hair Added|feed-in-braids.mp4"
  "Braids|Stitch Braids (4-12)|feed-in-braids.mp4"
  "Braids|French Braids for Kids|french-braids-kids.mp4"

  "Bob Style Knotless|Bob (Smedium + Bohemian)|bob-smedium.mp4"
  "Bob Style Knotless|Bob (Medium + Bohemian)|bob-medium.mp4"
  "Bob Style Knotless|Bob (Smedium Knotless)|bob-smedium.mp4"
  "Bob Style Knotless|Bob (Medium Knotless)|bob-medium.mp4"
  "Bob Style Knotless|Bob (Large Size)|bob-medium.mp4"

  "Weaves & Extensions|Sew In Weave|sew-in-weave.mp4"
  "Weaves & Extensions|Crochet Sew In|crochet-braids.mp4"
  "Weaves & Extensions|Full Quick Weave|quick-weave.mp4"
  "Weaves & Extensions|Quick Weave w- Style|quick-weave.mp4"
  "Weaves & Extensions|Half Up Half Down Sew In|half-up-half-down.mp4"
  "Weaves & Extensions|Half Up Half Down with Swoop|half-up-half-down.mp4"
  "Weaves & Extensions|Half Up Half Down Quick Weave|half-up-half-down.mp4"
  "Weaves & Extensions|Creative Style Quick Weave|quick-weave.mp4"
  "Weaves & Extensions|2 Braids x Quick Weave|quick-weave.mp4"
  "Weaves & Extensions|Braids in Front + Quick Weave|quick-weave.mp4"

  "Ponytails & Updos|Sleek Ponytail|sleek-ponytail.mp4"
  "Ponytails & Updos|Swoop Ponytail|swoop-ponytail.mp4"
  "Ponytails & Updos|3 Part Pony|braided-ponytail.mp4"
  "Ponytails & Updos|Bundle Pony|bundle-pony.mp4"
  "Ponytails & Updos|Braided Ponytail|braided-ponytail.mp4"

  "Hair Color|Highlights|highlights.mp4"
  "Hair Color|Hair Dye|hair-dye.mp4"
  "Hair Color|Hair Color & Style|hair-dye.mp4"
  "Hair Color|Dye Tips - Ends|dye-tips.mp4"

  "Cuts & Barbering|Women's Haircut|pixie-cut.mp4"
  "Cuts & Barbering|Pixie Haircut|pixie-cut.mp4"
  "Cuts & Barbering|Women Line Up w- Fade (Back)|pixie-cut.mp4"
  "Cuts & Barbering|Kid Haircuts|kids-braids.mp4"

  "Men's Braids|Natural Hair Singles (Men)|natural-singles.mp4"
  "Men's Braids|Designed Freestyle Braids|feed-in-braids.mp4"
  "Men's Braids|Straight Backs (Men)|feed-in-braids.mp4"
  "Men's Braids|Men Design Braids|feed-in-braids.mp4"

  "Chemical & Add-ons|Eyebrow Wax|eyebrow-wax.mp4"
  "Chemical & Add-ons|Waxing (legs, underarms, brows)|eyebrow-wax.mp4"
  "Chemical & Add-ons|Braid Down for Wig|feed-in-braids.mp4"
  "Chemical & Add-ons|Braid Take Down|feed-in-braids.mp4"
  "Chemical & Add-ons|Braid Touch Up (Entire Perimeter)|feed-in-braids.mp4"
  "Chemical & Add-ons|Need Help Parting|feed-in-braids.mp4"
)

total=${#ENTRIES[@]}
i=0
ok=0
miss=0

for entry in "${ENTRIES[@]}"; do
  i=$((i + 1))
  IFS='|' read -r category service video <<< "$entry"

  vid_path="$VID/$video"
  out_dir="$PUB/$category/$service"

  if [[ ! -f "$vid_path" ]]; then
    echo "[$i/$total] MISS video: $vid_path"
    miss=$((miss + 1))
    continue
  fi

  if [[ ! -d "$out_dir" ]]; then
    echo "[$i/$total] MISS folder: $out_dir"
    miss=$((miss + 1))
    continue
  fi

  duration=$(ffprobe -v error -show_entries format=duration -of default=nw=1:nk=1 "$vid_path")
  duration_int=${duration%.*}
  written=0
  for n in 1 2 3 4 5; do
    if (( n > duration_int )); then
      continue
    fi
    ffmpeg -nostdin -loglevel error -y -ss "$n" -i "$vid_path" \
      -frames:v 1 -q:v 2 "$out_dir/${service}${n}.jpg"
    written=$((written + 1))
  done

  echo "[$i/$total] OK   $category / $service  ($video, ${written}/5 frames)"
  ok=$((ok + 1))
done

echo ""
echo "Done. $ok extracted, $miss skipped, $total total entries."
