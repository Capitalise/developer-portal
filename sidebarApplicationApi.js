const sidebars = {
  applicationApiSideBar: [
    {
      type: "category",
      label: "Application API",
      collapsed: false,
      items: [
        "application-api/introduction",
        {
          type: "collapsible",
          label: "Application Flow",
          collapsed: false,
          items: [
            {
              type: "doc",
              id: "application-api/application-flow",
            },
            {
              type: "doc",
              id: "application-api/prerequisites-and-requirements",
            },
            {
              type: "doc",
              id: "application-api/go-live-sign-off",
            },
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
