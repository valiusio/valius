#!/bin/sh

sudo service apache2 stop &&
sudo git pull &&
sudo composer install &&
sudo cd frontend/valius/ &&
sudo npm i &&
sudo npm run build &&
sudo service apache2 start
