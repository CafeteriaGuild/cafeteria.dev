// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

const React = require("react");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cafeteria Development',
  tagline: 'Developing mods for Fabric!',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://cafeteria.dev/',
  trailingSlash: false,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CafeteriaGuild', // Usually your GitHub org/user name.
  projectName: 'cafeteria.dev', // Usually your repo name.
  deploymentBranch: 'gh-pages',

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
        },
        blog: {
          showReadingTime: true,
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
              icon: 'https://cdn.simpleicons.org/googledocs/d6cda3',
              to: '/wiki/start',

              position: 'left',
              className: 'wiki-navbar'
            },
            {
              icon: 'https://cdn.simpleicons.org/discord/d6cda3',
              href: 'https://discord.com/invite/G4PjhEf',

              position: 'left',
              className: 'discord-navbar'
            },
            {
              icon: 'https://cdn.simpleicons.org/curseforge/d6cda3',
              href: 'https://www.curseforge.com/members/cafeteriaguild/projects',

              position: 'left',
              className: 'curseforge-navbar'
            },
            {
              icon: 'https://cdn.simpleicons.org/modrinth/d6cda3',
              href: 'https://modrinth.com/user/CafeteriaGuild',

              position: 'left',
              className: 'modrinth-navbar'
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
        id: 'wiki',
        path: 'wiki',
        routeBasePath: 'wiki',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ]
  ]
};

module.exports = config;
