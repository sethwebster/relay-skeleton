#!/bin/bash
yarn relay
yarn build
serve -s build/
