@echo on

git add dist -f 
pause

git commit -m "Add dist for deployment"
pause

git subtree push --prefix dist origin gh-pages
@echo "Success"

pause