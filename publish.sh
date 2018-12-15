echo "Deleting old build, if present"
rm -rf temp
mkdir temp
git worktree prune
rm -rf .git/worktrees/temp/

echo "Checking out gh-pages branch into temp"
git worktree add -B gh-pages temp origin/gh-pages

# echo "Removing existing files"
rm -rf temp/*

npm run build
cp -r build/. temp

pushd temp
git add --all
git commit -m "Publishing to gh-pages as of $(date)"
git push
popd