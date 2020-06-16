module.exports = {
  title: 'APISIX',
  tagline: 'Micro-service Gateway',
  url: 'https://sshniro.github.io/apisix-docs/',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'sshniro', // Usually your GitHub org/user name.
  projectName: 'apisix-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      // title: 'APISIX',
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
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
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Mailing List',
              href: 'https://mail-archives.apache.org/mod_mbox/apisix-dev/',
            },
            {
              label: 'Slack',
              href: 'https://app.slack.com/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/ApacheAPISIX',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/apache/incubator-apisix',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'getting-started',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/apache/incubator-apisix/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/apache/incubator-apisix/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
