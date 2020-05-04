#!/usr/bin/env bash
target="./*.html"
sed -i "" 's/Blog/Latest news/g' $target
sed -i "" 's/<!-- \*\*\* BLOG SECTION-->/<!-- \*\*\* LATEST NEWS SECTION-->/g' $target
