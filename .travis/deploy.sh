#!/bin/bash
set -x
if [ $TRAVIS_BRANCH == 'master' ] ; then
    cd dist
    git init

    git remote add deploy ssh://$USER@$IP:$PORT$DEPLOY_DIR

    git add .
    git commit -m "Deploy"
    git push --force deploy master
else
    echo "Non master branch. Not deploying."
fi
