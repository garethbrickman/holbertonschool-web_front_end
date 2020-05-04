#!/usr/bin/env bash
target="./*.html"
sed -i "" 's/<aside>//' $target
sed -i "" 's/<\/aside>//' $target
sed -i "" 's/Aside//' $target
