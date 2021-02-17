#!/bin/bash

PUBLIC_PATH='https://github.com/hack4impact/logger/tree/main/docs/'

set -e

echo "Removing existing documentation..."
rimraf temp-docs docs README.md

# Create the documentation that will be used to construct the README in the temp-docs folder
echo "Creating temporary documentation..."
typedoc src/index.ts --plugin typedoc-plugin-markdown --theme markdown --out temp-docs --name 'Hack4Impact Logger' --hideBreadcrumbs --excludePrivate --hideInPageTOC --publicPath $PUBLIC_PATH

echo "Redirecting Logger Class Documentation to README..."
echo "$(cat temp-docs/classes/logger.md)" > README.md

echo "Adding one level of heading to each header..."
sed -i '' 's/#/##/' README.md

echo "Renaming 'Class: Logger' to 'API Documentation'..."
sed -i '' 's/Class: Logger/API Documentation/' README.md

echo "Creating the full README..."
echo "$(cat static/templates/readme-above-doc.md)
$(cat README.md)
$(cat static/templates/readme-below-doc.md)" > README.md

echo "Adding a Table of Contents..."
markdown-toc README.md --maxdepth 3 -i

echo "Removing Temporary Docs Folder..."
rimraf temp-docs

echo "Generating contributors..."
npm run contributors:generate > /dev/null

echo "Generating docs folder..."
typedoc src/index.ts --plugin typedoc-plugin-markdown --theme markdown --out docs --name 'Hack4Impact Logger' --excludePrivate --publicPath $PUBLIC_PATH

echo "Formatting files..."
prettier --write README.md docs/ > /dev/null
