#!/usr/bin/env sh

# abort on errors
set -e

# build
echo "Building the project..."
BASE_URL=/portfolio/ npm run build

# Verify the build output
echo "Verifying build output..."
if [ ! -f dist/index.html ]; then
  echo "Error: Build failed. index.html not found in dist directory."
  exit 1
fi

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

# Initialize git repository if not already done
echo "Setting up git in the dist directory..."
if [ -d .git ]; then
  echo "Git repository already exists"
else
  git init
  git checkout -b main
fi

# Add and commit changes
echo "Committing changes..."
git add -A
git commit -m 'deploy'

# Deploy to GitHub Pages
echo "Deploying to GitHub Pages..."
# if you are deploying to https://ntnam1993.github.io
# git push -f git@github.ntnam1993:ntnam1993/ntnam1993.github.io.git main

# if you are deploying to https://ntnam1993.github.io/portfolio
git push -f git@github.ntnam1993:ntnam1993/portfolio.git main:gh-pages

cd -
echo "Deployment complete!"