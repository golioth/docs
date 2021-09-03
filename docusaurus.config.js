module.exports = {
  title: "Golioth",
  tagline: "The Device You're Developing Is Cloud Ready",
  url: "https://docs.golioth.io",
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
              to: "/docs/guides/golioth-platform-getting-started/platform-overview",
            },
            {
              label: "Over the Air Updates",
              to: "docs/guides/ota/sending-updates",
            },
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
      copyright: `Copyright © ${new Date().getFullYear()} Golioth. Built with ❤️ & Docusaurus.`,
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
  plugins: [
    ['docusaurus2-dotenv',
    {
        path: `./.env.${process.env.HOSTING_ENV}`, // The path to your environment variables.
        safe: false, // If false ignore safe-mode, if true load './.env.example', if a string load that file as the sample
        systemvars: false, // Set to true if you would rather load all system variables as well (useful for CI purposes)
        silent: false, //  If true, all warnings will be suppressed
        expand: false, // Allows your variables to be "expanded" for reusability within your .env file
        defaults: false, //  Adds support for dotenv-defaults. If set to true, uses ./.env.defaults
    }]
  ]
};
