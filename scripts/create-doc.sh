PUBLIC_PATH='https://github.com/YashTotale/logger/tree/main/docs/'

# Removing existing documentation
rimraf temp-docs docs README.md

# Create the documentation that will be used to construct the README
typedoc src/index.ts --plugin typedoc-plugin-markdown --theme markdown --out temp-docs --name 'Hack4Impact Logger' --hideBreadcrumbs --excludePrivate --hideInPageTOC --publicPath $PUBLIC_PATH

# Echo the Logger Class Documentation to the README
echo "$(cat temp-docs/classes/logger.md)" > README.md

# Append the Log Interface Documentation to the README
# echo "$(cat temp-docs/interfaces/log.md)" >> README.md

# Add one level of heading to each header
sed -i '' 's/#/##/' README.md
sed -i '' 's/Class: Logger/API Documentation/' README.md

# Create the full README, including the skeleton, a table of contents, and the existing README from the previous steps

echo "$(cat scripts/templates/readme-skeleton.md)
      $(cat README.md)" > README.md

markdown-toc README.md --maxdepth 3 -i

# Remove the temp-docs folder created to construct the README
rimraf temp-docs

# Create the documentation that will be used to construct the docs folder
typedoc src/index.ts --plugin typedoc-plugin-markdown --theme markdown --out docs --name 'Hack4Impact Logger' --excludePrivate --publicPath $PUBLIC_PATH

# Format all created documentation
prettier --write README.md docs/
