#!/bin/bash
set -x

cd .travis

openssl aes-256-cbc -K $encrypted_15f3ecbd90ae_key -iv $encrypted_15f3ecbd90ae_iv -in hawk-deploy.enc -out hawk-deploy -d
eval "$(ssh-agent -s)"
rm hawk-deploy.enc
chmod 600 hawk-deploy
mv hawk-deploy ~/.ssh/id_rsa
ssh-add ~/.ssh/id_rsa
ssh-keyscan -H -p $PORT $IP >> ~/.ssh/known_hosts

cd ..
npm install
