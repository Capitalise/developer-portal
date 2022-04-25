const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/**
 * @type {import('redocusaurus').PresetEntry}
 */
const redocusaurus = [
  "redocusaurus",
  {
    debug: Boolean(process.env.DEBUG || process.env.CI),
    specs: [
      {
        id: "platform-v1",
        spec: "./openapi/platform-v1.yaml",
        route: "/api/platform/",
      },
      {
        id: "marketplace-v1",
        spec: "./openapi/marketplace-v1.yaml",
        route: "/api/marketplace/v1",
      },
      {
        id: "marketplace-v2",
        spec: "./openapi/marketplace-v2.yaml",
        route: "/api/marketplace/v2",
      },
    ],
    theme: {
      /**
       * Highlight color for docs
       */
      primaryColor: "#1890ff",
      /**
       * Options to pass to redoc
       * @see https://github.com/redocly/redoc#redoc-options-object
       */
      options: {
        disableSearch: false,
        sideNavStyle: "path-only",
        sortOperationsAlphabetically: true,
        sortTagsAlphabetically: true,
        sortEnumValuesAlphabetically: true,
      },
      /**
       * Options to pass to override RedocThemeObject
       * @see https://github.com/Redocly/redoc#redoc-theme-object
       */
      theme: {},
    },
  },
];

/**
 * @type {Partial<import('@docusaurus/types').DocusaurusConfig>}
 */
const config = {
  presets: [
    redocusaurus,
    /** ************ Rest of your Docusaurus Config *********** */
    [
      "@docusaurus/preset-classic",
      {
        debug: Boolean(process.env.DEBUG || process.env.CI),
        theme: { customCss: [require.resolve("./src/css/custom.css")] },
        docs: {
          sidebarPath: require.resolve("./sidebarsDocs.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          remarkPlugins: [require("mdx-mermaid")],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  plugins: [
    // Local search
    require.resolve("@cmfcmf/docusaurus-search-local"),
    "@docusaurus/theme-live-codeblock",
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
  title: "Capitalise.com Developer Portal",
  tagline: "Developer Portal",
  customFields: {
    meta: {
      description: "Integrate Redoc easily into your Docusaurus Site",
    },
  },
  url: process.env.DEPLOY_PRIME_URL || "http://localhost:5000", // Your website URL
  baseUrl: process.env.DEPLOY_BASE_URL || "/", // Base URL for your project */
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "capitalise", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: "Capitalise.com Developer Portal",
        src: "img/logo.svg",
      },
      style: "primary",
      items: [
        {
          label: "Use cases",
          position: "left",
          to: "/use-cases",
        },
        {
          label: "Platform",
          to: "/api/platform",
        },
        {
          label: "Marketplace",
          to: "/api/marketplace/v1",
          position: "left",
          items: [
            {
              label: "v1 (live)",
              to: "/api/marketplace/v1",
            },
            {
              label: "v2 (beta - coming soon)",
              to: "/api/marketplace/v2",
            },
          ],
        },
      ],
    },
    footer: {
      // logo: {
      //   alt: "Redocusaurus Logo",
      //   src: "img/logoDark.png",
      // },
      style: "dark",
      links: [
        {
          title: "NPM Modules",
          items: [
            {
              label: "Redocusaurus",
              href: "https://www.npmjs.com/package/redocusaurus/",
            },
            {
              label: "Docusaurus Theme Redoc",
              href: "https://www.npmjs.com/package/docusaurus-theme-redoc/",
            },
            {
              label: "Docusaurus Plugin Redoc",
              href: "https://www.npmjs.com/package/docusaurus-plugin-redoc/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Github",
              href: "https://github.com/rohit-gohri/redocusaurus/",
            },
            {
              label: "Blog Post",
              href: "https://rohit.page/blog/projects/openapi-for-docusaurus/",
            },
            {
              label: "Twitter Discussion",
              href: "https://twitter.com/rohit_gohri/status/1351589213565644801",
            },
          ],
        },
      ],
      copyright: `Copyright © 2016-${new Date().getFullYear()} <a href="https://capitalise.com" target="_blank" rel="noopener noreferrer">Capitalise.com</a>`,
    },
    liveCodeBlock: {
      playgroundPosition: "top",
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ["powershell", "bash"],
    },
  },
};

module.exports = config;
