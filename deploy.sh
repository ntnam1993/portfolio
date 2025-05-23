#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

#git init
#git checkout -b master
git add -A
git commit -m 'deploy'

# if you are deploying to https://ntnam1993.github.io
# git push -f git@github.ntnam1993:ntnam1993/ntnam1993.github.io.git main

# if you are deploying to https://github.com/ntnam1993/portfolio.git
git push -f git@github.ntnam1993:ntnam1993/portfolio.git main:gh-pages

cd -