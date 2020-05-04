#!/usr/bin/env bash
target="./*.html"
sed -i "" 's/<title>Article - Techium<\/title>/<title>Homepage - Techium<\/title>/' $target
