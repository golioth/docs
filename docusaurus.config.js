module.exports = {
  title: 'Golioth',
  tagline: 'The Device You\'re Developing Is Cloud Ready.',
  url: 'https://docs.golioth.io',
  customFields: {
    // swaggerUrl: "http://localhost:9090/swagger.json",
    swaggerUrl: "https://api.golioth.dev/swagger.json"
  },
  themes: ['@docusaurus/theme-live-codeblock'],
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'golioth', // Usually your GitHub org/user name.
  projectName: 'golioth', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Golioth Docs',
      logo: {
        alt: 'Golioth',
        src: 'img/Golioth_Icon_Gradient.png',
      },
      items: [
        {
          to: 'docs/guides',
          activeBasePath: 'guides',
          label: 'Guides',
          position: 'left',
        },
        {
          to: 'docs/reference',
          activeBasePath: 'reference',
          label: 'Reference',
          position: 'left',
        },
        {
          to: 'docs/support',
          label: 'Support',
          position: 'left'
        },
        {
          to: 'docs/support',
          label: 'Support',
          position: 'left'
        },
        {
          href: 'https://github.com/golioth/golioth',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/guides',
            },
            {
              label: 'Over the Air Updates',
              to: 'docs/guides/ota/sending-updates',
            },
            /*{
              label: 'Logging and Diagnostics',
              to: 'docs/guides/logging/getting-started',
            },*/
          ],
        },
        {
          title: 'Reference',
          items: [
            {
              label: 'API and SDK Reference',
              to: 'docs/reference',
            },
            {
              label: 'API Docs',
              to: 'docs/reference/api-docs',
            },
            /*{
              label: 'Zephyr SDK',
              to: 'docs/advanced/running-locally',
            },*/
            {
              label: 'goliothctl',
              to: 'docs/reference/goliothctl/goliothctl',
            },
            {
              label: 'coap',
              to: 'docs/reference/coap/coap',
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
          title: 'More',
          items: [
            {
              label: 'Support',
              to: 'support',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/golioth/golioth',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Golioth. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          //routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // editUrl: 'https://github.com/golioth/golioth/edit/master/docs/',
          remarkPlugins: [require("remark-mermaid-dataurl")],
        },
        blog: {
          showReadingTime: true,
          //editUrl: 'https://github.com/golioth/golioth/edit/master/docs/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
          swaggerCss: require.resolve("swagger-ui-react/swagger-ui.css")
        },
      },
    ],
  ],
};
