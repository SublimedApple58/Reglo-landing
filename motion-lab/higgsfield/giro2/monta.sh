#!/bin/bash
# uso: monta.sh <uscita.mp4> <clip1> <clip2> ...  -> concatena con dissolvenze da 0.3 s
set -e
out="$1"; shift
n=$#; inputs=""; for f in "$@"; do inputs="$inputs -i $f"; done
# durate reali per calcolare gli offset delle dissolvenze
durs=(); for f in "$@"; do durs+=($(ffprobe -v error -show_entries format=duration -of csv=p=0 "$f")); done
fc=""; prev="[0:v]"; acc=${durs[0]}; X=0.3
for ((i=1;i<n;i++)); do
  off=$(python3 -c "print(round($acc-$X*$i,3))")
  lab="[v$i]"; fc="$fc${prev}[$i:v]xfade=transition=fade:duration=$X:offset=$off$lab;"
  prev=$lab; acc=$(python3 -c "print($acc+${durs[$i]})")
done
fc="${fc%;}"
ffmpeg -y -loglevel error $inputs -filter_complex "$fc" -map "$prev" -c:v libx264 -pix_fmt yuv420p -crf 18 "$out"
ffprobe -v error -show_entries format=duration -of csv=p=0 "$out"
