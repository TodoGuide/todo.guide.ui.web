echo "Deleting old build"
rm -rf build
mkdir build
git worktree prune
rm -rf .git/worktrees/build/

echo "Checking out gh-pages branch into build"
git worktree add -B gh-pages build origin/gh-pages

echo "Removing existing files"
rm -rf build/*

npm run build
pushd build
git add --all
git commit -m "Publishing to gh-pages as of $(date)"
git push
popd