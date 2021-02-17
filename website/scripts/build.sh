#!/bin/bash

set -e

mkdir -p docs
docusaurus build
prettier --write typedoc-sidebar.js
