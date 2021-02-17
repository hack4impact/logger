#!/bin/bash

set -e

rm -rf dist
ncc build src/index.ts --out dist
mv dist/index.js dist/logger.js

ncc build src/index.ts -m --out dist
mv dist/index.js dist/logger.min.js
