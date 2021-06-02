module.exports = {
  title: "Golioth",
  tagline: "The Device You're Developing Is Cloud Ready",
  url: "https://docs.golioth.io",
  customFields: {
    // swaggerUrl: "http://localhost:9090/swagger.json",
    swaggerUrl: "https://api.golioth.dev/swagger.json",
  },
  themes: ["@docusaurus/theme-live-codeblock"],
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "golioth", // Usually your GitHub org/user name.
  // projectName: "docs", // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: false,
    },
    navbar: {
      logo: {
        alt: "Golioth",
        src: "img/white_logo.svg",
      },
      items: [
        {
          to: "docs/guides",
          activeBasePath: "guides",
          label: "Guides",
          position: "left",
        },
        {
          to: "docs/reference",
          activeBasePath: "reference",
          label: "Reference",
          position: "left",
        },
        {
          to: "docs/support",
          label: "Support",
          position: "left",
        },
        {
          href: "https://github.com/golioth",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/guides",
            },
            {
              label: "Over the Air Updates",
              to: "docs/guides/ota/sending-updates",
            },
            /*{
              label: 'Logging and Diagnostics',
              to: 'docs/guides/logging/getting-started',
            },*/
          ],
        },
        {
          title: "Reference",
          items: [
            {
              label: "API and SDK Reference",
              to: "docs/reference",
            },
            {
              label: "API Docs",
              to: "docs/reference/api-docs",
            },
            /*{
              label: 'Zephyr SDK',
              to: 'docs/advanced/running-locally',
            },*/
            {
              label: "goliothctl",
              to: "docs/reference/goliothctl/goliothctl",
            },
            {
              label: "coap",
              to: "docs/reference/coap/coap",
            },
          ],
        },
        /*{
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },*/
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/golioth",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Golioth. Built ❤️ & Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          //routeBasePath: '/',
          sidebarPath: require.resolve("./sidebars.js"),
          // editUrl: 'https://github.com/golioth/golioth/edit/master/docs/',
        },
        blog: {
          showReadingTime: true,
          //editUrl: 'https://github.com/golioth/golioth/edit/master/docs/blog/',
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
          swaggerCss: require.resolve("swagger-ui-react/swagger-ui.css"),
        },
      },
    ],
  ],
};
