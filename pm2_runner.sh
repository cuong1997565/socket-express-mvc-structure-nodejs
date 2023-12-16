#!/bin/bash
echo type pm2 > /dev/null
if ! type pm2 > /dev/null
            then
                sudo npm install -g pm2 && pm2 start ./index.js --name=nodeodejs-backend
            else
                pm2 restart nodeodejs-backend
fi