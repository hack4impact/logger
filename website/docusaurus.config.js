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
      style: "dark",
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
          title: "More",
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
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Hack4Impact`,
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
