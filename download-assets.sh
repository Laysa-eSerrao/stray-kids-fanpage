#!/bin/bash

# Script para baixar capas de álbuns localmente
# Execute com: bash download-assets.sh

mkdir -p assets/albums
mkdir -p assets/members
mkdir -p assets/skzoo
mkdir -p assets/gallery

echo "📀 Baixando capas de álbuns..."

download() {
  local url="$1"
  local dest="$2"
  if [ -f "$dest" ]; then
    echo "  ✓ já existe: $dest"
  else
    curl -L --silent --fail -o "$dest" "$url" && echo "  ✓ $dest" || echo "  ✗ ERRO: $dest"
  fi
}

# Álbuns
download "https://static.wikia.nocookie.net/stray-kids/images/3/3d/THIS_%26_THAT_Digital_Cover.jpg/revision/latest/scale-to-width-down/1000?cb=20260714140146" "assets/albums/this-and-that.jpg"
download "https://d1al7qj7ydfbpt.cloudfront.net/artists/straykids/albums/1782273961369-881e95eb.jpg" "assets/albums/run-it.jpg"
download "https://static.wikia.nocookie.net/stray-kids/images/7/71/Endless_Sun_Digital_Cover.jpg/revision/latest/scale-to-width-down/1000?cb=20260313042615" "assets/albums/endless-sun.jpg"
download "https://akamai.sscdn.co/letras/360x360/albuns/4/7/7/3/4809391776718807.jpg" "assets/albums/stay-single.jpg"
download "https://akamai.sscdn.co/letras/360x360/albuns/4/6/3/9/4219271763739713.jpg" "assets/albums/do-it.jpg"
download "https://akamai.sscdn.co/letras/360x360/albuns/9/0/1/7/3671491759770818.jpg" "assets/albums/karma.jpg"
download "https://akamai.sscdn.co/letras/360x360/albuns/f/2/5/4/3219971753127268.jpg" "assets/albums/hollow.jpg"
download "https://akamai.sscdn.co/letras/360x360/albuns/7/f/e/9/2891771742554519.jpg" "assets/albums/dominate.jpg"
download "https://akamai.sscdn.co/letras/360x360/albuns/a/d/7/5/2218701734439880.jpg" "assets/albums/hop.jpg"
download "https://akamai.sscdn.co/letras/360x360/albuns/6/c/4/c/2437281731521663.jpg" "assets/albums/giant.jpg"
download "https://akamai.sscdn.co/letras/360x360/albuns/3/2/8/5/2309341721749059.jpg" "assets/albums/slash.jpg"
download "https://akamai.sscdn.co/letras/360x360/albuns/1/8/c/4/2304721721390720.jpg" "assets/albums/ate.jpg"
download "https://akamai.sscdn.co/letras/360x360/albuns/e/f/a/d/2241071717439651.jpg" "assets/albums/lose-my-breath.jpg"
download "https://akamai.sscdn.co/letras/360x360/albuns/4/b/d/e/2407601729245928.jpg" "assets/albums/come-play.jpg"
download "https://akamai.sscdn.co/letras/360x360/albuns/6/0/b/b/1586341706541058.jpg" "assets/albums/5-star.jpg"
download "https://i.pinimg.com/1200x/cf/df/97/cfdf97cbbcfe4f1e877ff9db280c84f5.jpg" "assets/albums/rock-star.jpg"
download "https://akamai.sscdn.co/letras/360x360/albuns/4/a/0/c/1444131681997935.jpg" "assets/albums/social-path-ep.jpg"
download "https://akamai.sscdn.co/letras/360x360/albuns/b/3/d/4/1392111681997927.jpg" "assets/albums/maxident.jpg"
download "https://akamai.sscdn.co/letras/360x360/albuns/d/4/3/4/1255491681997918.jpg" "assets/albums/oddinary.jpg"
download "https://akamai.sscdn.co/letras/360x360/albuns/6/b/6/d/1400281682347938.jpg" "assets/albums/circus.jpg"
download "https://akamai.sscdn.co/letras/360x360/albuns/4/a/0/c/1444131681997935.jpg" "assets/albums/skz-replay.jpg"
download "https://akamai.sscdn.co/letras/360x360/albuns/c/e/e/c/1205891682347933.jpg" "assets/albums/christmas-evel.jpg"
download "https://akamai.sscdn.co/letras/360x360/albuns/e/6/8/e/1136961681997899.jpg" "assets/albums/noeasy.jpg"
download "https://akamai.sscdn.co/letras/360x360/albuns/5/b/5/9/1220471681997909.jpg" "assets/albums/skz2021.jpg"
download "https://akamai.sscdn.co/letras/360x360/albuns/4/b/4/c/962401681997889.jpg" "assets/albums/in-life.jpg"
download "https://akamai.sscdn.co/letras/360x360/albuns/4/b/4/c/962401681997889.jpg" "assets/albums/all-in.jpg"
download "https://akamai.sscdn.co/uploadfile/letras/albuns/9/8/1/d/917981681997881.jpg" "assets/albums/go-live.jpg"
download "https://akamai.sscdn.co/letras/360x360/albuns/5/b/5/9/1220471681997909.jpg" "assets/albums/skz2020.jpg"
download "https://akamai.sscdn.co/uploadfile/letras/albuns/1/8/6/4/820831681997786.jpg" "assets/albums/cle-levanter.jpg"
download "https://akamai.sscdn.co/uploadfile/letras/albuns/f/a/4/2/739351681997869.jpg" "assets/albums/cle2-yellow-wood.jpg"
download "https://akamai.sscdn.co/uploadfile/letras/albuns/4/e/a/e/710451681997861.jpg" "assets/albums/cle1-miroh.jpg"
download "https://akamai.sscdn.co/uploadfile/letras/albuns/a/7/5/8/667931681997795.jpg" "assets/albums/i-am-you.jpg"
download "https://akamai.sscdn.co/uploadfile/letras/albuns/9/1/5/8/657101681997849.jpg" "assets/albums/i-am-who.jpg"
download "https://akamai.sscdn.co/uploadfile/letras/albuns/0/a/9/3/633621681997843.jpg" "assets/albums/i-am-not.jpg"
download "https://akamai.sscdn.co/uploadfile/letras/albuns/3/0/e/c/615131708092816.jpg" "assets/albums/mixtape.jpg"
download "https://akamai.sscdn.co/letras/360x360/albuns/4/a/0/c/1444131681997935.jpg" "assets/albums/the-sound.jpg"

echo ""
echo "✅ Download concluído! Verifique a pasta assets/albums/"
echo "   Arquivos com ✗ precisam ser baixados manualmente."
