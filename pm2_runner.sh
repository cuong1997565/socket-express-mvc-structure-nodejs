#!/bin/bash
echo type pm2 > /dev/null
if ! type pm2 > /dev/null
            then
                echo 1
                # sudo npm install -g pm2 && pm2 start ./index.js --name=nodeodejs-backend
            else
                echo 2
                # pm2 restart nodeodejs-backend
fi