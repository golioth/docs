module.exports = {
  title: 'golioth',
  tagline: 'Making IoT Easy',
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
      title: 'golioth',
      logo: {
        alt: 'golioth',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'apidocs',
          label: 'API Docs',
          position: 'left'
        },
        {
          to: 'blog',
          label: 'Blog',
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
              to: 'docs/',
            },
            {
              label: 'Advanced',
              to: 'docs/advanced/running-locally',
            },
            {
              label: 'goliothctl',
              to: 'docs/goliothctl/goliothctl',
            },
            {
              label: 'gurl',
              to: 'docs/gurl/gurl',
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
              label: 'API Docs',
              to: 'apidocs',
            },
            {
              label: 'Blog',
              to: 'blog',
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
