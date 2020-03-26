#!/bin/bash
echo Starting up...
# yarn build
# sleep 5
./node_modules/nodemon/bin/nodemon.js --ignore ./build  --exec ./scripts/build-and-serve.sh
