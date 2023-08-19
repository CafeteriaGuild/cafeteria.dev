// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const React = require("react");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cafeteria Development',
  tagline: 'Developing mods for Fabric!',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://gabrielolvh.github.io/',
  trailingSlash: false,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/test-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'GabrielOlvH', // Usually your GitHub org/user name.
  projectName: 'test-docs', // Usually your repo name.
  deploymentBranch: 'main',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-br'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
              'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
              'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),

    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        // Replace with your project's social card
        image: 'img/logo.jpg',
        navbar: {
          title: 'Cafeteria Development',
          logo: {
            alt: 'Cafeteria Logo',
            src: 'img/logo.svg',
          },
          items: [
            {
              icon: 'https://cdn.simpleicons.org/discord/d6cda3',
              to: 'https://discord.com/invite/G4PjhEf',

              position: 'left',
              className: 'dc'
            },

            {
              type: 'localeDropdown',
              position: 'right',
            },

          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Community',
              items: [

                {
                  label: 'Discord',
                  href: 'https://discord.com/invite/G4PjhEf',
                },
              ],
            },
            {
              title: 'Links',
              items: [

                {
                  label: 'Curseforge',
                  href: 'https://curseforge.com/members/CafeteriaGuild',
                },
                {
                  label: 'Modrinth',
                  href: 'https://modrinth.com/user/CafeteriaGuild',
                },
                {
                  label: 'Github',
                  href: 'https://github.com/CafeteriaGuild/',
                },
                {
                  "label": 'Maven',
                  "href": "https://maven.cafeteria.dev/"
                }
              ],
            }
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Cafeteria Development. Built with Docusaurus.`,
        },
        prism: {
          theme: darkCodeTheme,
          lightTheme: lightCodeTheme,
        },
      }),

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'pixelpets',
        path: 'pixelpets',
        routeBasePath: 'pixelpets',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ]
  ]
};

module.exports = config;