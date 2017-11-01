# How to build!
1. install python3
2. install dependancies via pip3
3. run `python3 scripts.py build` from the root directory of the git repo
4. ???
5. html files apear in root of git repo

## IMPORTANT NOTE
the index page isnt compiled like the rest of the site because its fanacy, for now edit it in its html file

## How to add css or javascript to a individual file
Add it at the top of the views/<yourfile>.mustache file instead of in a head tag. See /views for examples

## How to edit layout stuff like the nav bar
edit the layout file layouts/layout.mustache

more functionality coming soon
see the original repo for [some reference](https://github.com/mjrb/compile.py)
the build config is inline in scripts.py :C @mjrb will hopefully fix this