#!/bin/bash

set -e

linkinator "https://hack4impact.github.io/logger/" --config "$(pwd)/.linkinatorrc"

find . -name "*.md" | grep -v node_modules | grep -v website/docs | while read -r line; do
  linkinator $line --markdown --config "$(pwd)/.linkinatorrc"
done
