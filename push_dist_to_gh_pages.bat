@echo on

pnpm run build

git add dist -f 

git commit -m "Add dist for deployment"

git subtree push --prefix dist origin gh-pages

@echo "Success"

pause