// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Capitalise.com Developer Portal",
  tagline: "Dinosaurs are cool",
  url: "https://developer.capitalise.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "capitalise", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  plugins: [
    // Local search
    require.resolve("@cmfcmf/docusaurus-search-local"),
    // TailwindCSS
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    // Set up use-cases
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "useCases",
        path: "use-cases",
        routeBasePath: "use-cases",
        sidebarPath: require.resolve("./sidebarsUseCases.js"),
        remarkPlugins: [require("mdx-mermaid")],
      },
    ],
  ],

  presets: [
    [
      "redocusaurus",
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: "openapi/platform.yaml",
            route: "/api/",
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: "#1890ff",
        },
      },
      // "classic",
      // /** @type {import('@docusaurus/preset-classic').Options} */
      // ({
      //   docs: {
      //     sidebarPath: require.resolve("./sidebarsDocs.js"),
      //     // Please change this to your repo.
      //     editUrl:
      //       "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
      //     remarkPlugins: [require("mdx-mermaid")],
      //   },
      //   blog: {
      //     showReadingTime: true,
      //     // Please change this to your repo.
      //     editUrl:
      //       "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
      //   },
      //   theme: {
      //     customCss: require.resolve("./src/css/custom.css"),
      //   },
      // }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Capitalise",
        logo: {
          alt: "Capitalise.com Developer Portal",
          src: "img/logo.svg",
        },
        items: [
          { to: "/use-cases", label: "Use Cases", position: "left" },
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Doc",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/facebook/docusaurus",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://github.com/facebook/docusaurus",
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
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
