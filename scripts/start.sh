#!/bin/bash

set -e

rm -rf dist
ncc build src/index.ts --out dist --watch
