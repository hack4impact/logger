#!/bin/bash

set -e

mkdir -p docs
docusaurus deploy
prettier --write typedoc-sidebar.js
