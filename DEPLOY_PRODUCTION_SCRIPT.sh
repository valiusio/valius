#!/bin/sh

sudo service apache2 stop &&
sudo git pull &&
sudo composer install &&
 cd frontend/valius/ &&
sudo npm i &&
sudo npm run build &&
sudo service apache2 start
