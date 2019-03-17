#!/bin/sh

echo "#### Stop apache2 service ####"
sudo service apache2 stop &&
echo "#### Get latest master ####"
sudo git pull origin $1 &&
echo "#### Install php Dependencies  ####"
sudo composer install &&
cd frontend/valius/ &&
echo "#### Install frontEnd Dependencies####"
sudo npm ci &&
echo "#### Build FrontEnd for production ####"
sudo npm run build &&
echo "#### Start apache2 service####"
sudo service apache2 start
echo "#### The server is up and running ####"
