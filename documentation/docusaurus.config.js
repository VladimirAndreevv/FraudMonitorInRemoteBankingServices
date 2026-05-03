// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';
import simplePlantUML from '@akebifiky/remark-simple-plantuml';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Мониторинг мошенничества',
  tagline: 'Система мониторинга подозрительной активности в ДБО',
  favicon: 'img/favicon.ico',

  url: 'https://VladimirAndreevv.github.io',
  baseUrl: '/FraudMonitorInRemoteBankingServices/',

  organizationName: 'VladimirAndreevv',
  projectName: 'FraudMonitorInRemoteBankingServices',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          remarkPlugins: [simplePlantUML],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            id: 'fraud-monitor-api',
            spec: 'docs/api/OpenAPI_2.yml',
          },
        ],
        theme: {
          primaryColor: '#1890ff',
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Мониторинг мошенничества',
        logo: {
          alt: 'Логотип Мониторинг мошенничества',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Документация',
          },
          {
            to: '/docs/api',
            label: 'API',
            position: 'left',
          },
          {
            to: '/docs/architecture/arch',
            label: 'Архитектура',
            position: 'left',
          },
          {
            to: '/docs/model',
            label: 'МодельБД',
            position: 'left',
          },
          {
            to: '/docs/use-cases',
            label: 'use-cases',
            position: 'left',
          },
          {
            to: '/docs/ui',
            label: 'UI',
            position: 'left',
          },
          {
            href: 'https://github.com/VladimirAndreevv/FraudMonitorInRemoteBankingServices',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Документация',
            items: [
              { label: 'Введение', to: '/docs/intro' },
            ],
          },
          {
            title: 'Ресурсы',
            items: [
              {
                label: 'GitHub репозиторий',
                href: 'https://github.com/VladimirAndreevv/FraudMonitorInRemoteBankingServices',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Мониторинг мошенничества. Построено с Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;