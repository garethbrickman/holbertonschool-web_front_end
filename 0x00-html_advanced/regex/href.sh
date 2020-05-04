#!/usr/bin/env bash
target="./*.html"
sed -i "" 's/<a href=".\/">Home<\/a>/<a href="\/">Home<\/a>/' $target
sed -i "" 's/<a href="">Services<\/a>/<a href="#services">Services<\/a>/' $target
sed -i "" 's/<a href="">Works<\/a>/<a href="#works">Works<\/a>/' $target
sed -i "" 's/<a href="">About<\/a>/<a href="#about">About<\/a>/' $target
sed -i "" 's/<a href="">Latest news<\/a>/<a href="#latest_news">Latest news<\/a>/' $target
sed -i "" 's/<a href="">Testimonials<\/a>/<a href="#testimonials">Testimonials<\/a>/' $target
sed -i "" 's/<a href="">Contact<\/a>/<a href="#contact">Contact<\/a>/' $target
