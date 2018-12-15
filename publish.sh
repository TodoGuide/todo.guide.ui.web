echo "Deleting old build, if present"
rm -rf publish-temp
mkdir publish-temp
git worktree prune
rm -rf .git/worktrees/publish-temp/

echo "Checking out gh-pages branch into publish-temp"
git worktree add -B gh-pages publish-temp origin/gh-pages

# echo "Removing existing files"
rm -rf publish-temp/*

npm run build
cp -r build/. publish-temp

pushd publish-temp
git status
git add --all
git commit -m "Publishing to gh-pages as of $(date)"
git push
popd