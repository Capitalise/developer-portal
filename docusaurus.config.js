const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/**
 * @type {import('redocusaurus').PresetEntry}
 */
const redocusaurus = [
  "redocusaurus",
  {
    debug: Boolean(process.env.DEBUG || process.env.CI),
    editUrl: "https://github.com/Capitalise/developer-portal/tree/main/",
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
          editUrl: "https://github.com/Capitalise/developer-portal/tree/main/",
          remarkPlugins: [require("mdx-mermaid")],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/Capitalise/developer-portal/tree/main/",
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
        editUrl: "https://github.com/Capitalise/developer-portal/tree/main/",
      },
    ],
  ],
  title: "Capitalise.com Developer Portal",
  tagline:
    "Bring credit scores, business insights and access to financial products into your product using our ready-to-go API",
  customFields: {
    meta: {
      description: this.tagline,
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
              label: "v2 (beta)",
              to: "/api/marketplace/v2",
            },
          ],
        },
      ],
    },
    footer: {
      // logo: {
      //   alt: "Redocusaurus Logo",
      //   src: "img/logo.svg",
      // },
      style: "dark",
      links: [
        {
          title: "Capitalise.com Platform Ltd",
          items: [
            {
              html: `<p>2 Valentine Place, London. SE1 8QH</p>`,
            },
            {
              html: `<p>Capitalise.com Platform Ltd, trading as Capitalise, is authorised and regulated by the Financial Conduct Authority for regulated credit agreements. Capitalise is a credit broker not a lender.</p>`,
            },
          ],
        },
        {
          title: "Useful information",
          items: [
            {
              label: "About Us",
              href: "https://capitalise.com/gb/about",
            },
            {
              label: "Careers - we are hiring!",
              href: "https://capitalise.homerun.co",
            },
            {
              label: "FAQs",
              href: "https://capitalise.com/gb/faq",
            },
          ],
        },
        {
          title: "Contacts",
          items: [
            {
              label: "Call us on 020 8038 1151",
              href: "tel:02080381151",
            },
            {
              label: "support@capitalise.com",
              href: "mailto:support@capitalise.com",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/capitalisers/mycompany/",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/Capitalisers",
            },
          ],
        },
        {
          title: "Legal stuff",
          items: [
            {
              label: "Website Terms of Use",
              href: "https://capitalise.com/gb/legal/website-terms-of-use",
            },
            {
              label: "Privacy policy",
              href: "https://capitalise.com/gb/legal/privacy-policy",
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
