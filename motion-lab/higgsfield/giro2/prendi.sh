#!/bin/bash
# uso: prendi.sh <nome> <url>  -> scarica la clip e fa il foglio di fotogrammi
set -e
cd "$(dirname "$0")"
mkdir -p frames
curl -s -o "$1.mp4" "$2"
ffmpeg -y -loglevel error -i "$1.mp4" -vf "fps=1.4,scale=640:-1" "frames/$1-%02d.jpg"
python3 - "$1" <<'PY'
import sys, glob
from PIL import Image
n=sys.argv[1]; fs=sorted(glob.glob(f'frames/{n}-*.jpg')); ims=[Image.open(f) for f in fs]
w,h=ims[0].size; cols=4; rows=(len(ims)+cols-1)//cols
s=Image.new('RGB',(cols*w,rows*h),(30,30,36))
for i,im in enumerate(ims): s.paste(im,((i%cols)*w,(i//cols)*h))
s.save(f'{n}-sheet.jpg',quality=85); print(n, len(ims), 'fotogrammi')
PY
