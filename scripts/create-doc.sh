rimraf docs README.md
typedoc src/index.ts --plugin typedoc-plugin-markdown --theme markdown --out docs --name 'Hack4Impact Logger' --hideBreadcrumbs --excludePrivate --hideInPageTOC
echo "$(cat docs/classes/logger.md)" > README.md
echo "$(cat docs/interfaces/log.md)" >> README.md
sed -i '' 's/#/##/' README.md
echo "
$(cat scripts/templates/readme-skeleton.md)
$(markdown-toc README.md --maxdepth 3)

$(cat README.md)" > README.md
prettier --write README.md
typedoc src/index.ts --plugin typedoc-plugin-markdown --theme markdown --out docs --name 'Hack4Impact Logger' --excludePrivate --hideInPageTOC
