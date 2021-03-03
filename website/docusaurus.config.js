module.exports = {
  title: "Hack4Impact Logger",
  tagline:
    "The lightweight & lightning-fast Logger Utility used by Hack4Impact Projects",
  url: "https://hack4impact.github.io",
  baseUrl: "/logger/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "hack4impact",
  projectName: "logger",
  themeConfig: {
    image: "img/logo.png",
    prism: {
      defaultLanguage: "javascript",
    },
    navbar: {
      title: "Hack4Impact Logger",
      logo: {
        alt: "Hack4Impact Logger Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://hack4impact-logger-code-coverage.onrender.com/",
          label: "Code Coverage",
          position: "left",
        },
        {
          href: "https://www.npmjs.com/package/@hack4impact/logger",
          label: "NPM",
          position: "right",
        },
        {
          href: "https://github.com/hack4impact/logger",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      logo: {
        alt: "Hack4Impact Logo",
        href: "https://hack4impact.org/",
      },
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Overview",
              to: "docs/",
            },
            {
              label: "Table of Contents",
              to: "docs/modules/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Wiki",
              href: "https://github.com/hack4impact/logger/wiki",
            },
            {
              label: "Issues",
              href: "https://github.com/hack4impact/logger/issues",
            },
            {
              label: "Pull Requests",
              href: "https://github.com/hack4impact/logger/pulls",
            },
          ],
        },
        {
          title: "Project",
          items: [
            {
              label: "NPM",
              href: "https://www.npmjs.com/package/@hack4impact/logger",
            },
            {
              label: "GitHub",
              href: "https://github.com/hack4impact/logger",
            },
          ],
        },
        {
          title: "Hack4Impact",
          items: [
            {
              label: "Website",
              href: "https://hack4impact.org/",
            },
            {
              label: "GitHub",
              href: "https://github.com/hack4impact",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/hack4impact/",
            },
            {
              label: "YouTube",
              href: "https://www.youtube.com/channel/UCr4NvmG36QucUxjZIUUd4TQ",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Hack4Impact`,
    },
    algolia: {
      apiKey: "07c71363660fc7aa6e0b71174e002f9e",
      indexName: "logger",
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "docs",
          path: "docs",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      "docusaurus-plugin-typedoc",
      {
        name: "Hack4Impact Logger",
        excludePrivate: true,
        entryPoints: ["../src/index.ts"],
        tsconfig: "../tsconfig.json",
        out: "",
        allReflectionsHaveOwnDocument: true,
        sidebar: {
          readmeLabel: "Overview",
        },
      },
    ],
  ],
};
