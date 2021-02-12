rimraf temp-docs README.md
typedoc src/index.ts --plugin typedoc-plugin-markdown --theme markdown --out temp-docs --name 'Hack4Impact Logger' --hideBreadcrumbs --excludePrivate --hideInPageTOC
echo "$(cat temp-docs/classes/logger.md)" > README.md
echo "$(cat temp-docs/interfaces/log.md)" >> README.md
sed -i '' 's/#/##/' README.md
echo "
$(cat scripts/templates/readme-skeleton.md)
$(markdown-toc README.md --maxdepth 3)

$(cat README.md)" > README.md
rimraf temp-docs
prettier --write README.md
