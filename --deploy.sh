# abort on errors
set -e

# build
pnpm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:AndreiGoriunov/AndreiGoriunov.github.io.git main

cd -