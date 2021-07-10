/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

/** @type {import('@docusaurus/types').DocusaurusConfig} */

const path = require('path');

module.exports = {
  title: 'StyledBox Website',
  tagline: 'The atomics css solution based on styled components.',
  url: 'https://github.com/afeiship/styled-atomics',
  baseUrl: '/styled-atomics/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'afeiship', // Usually your GitHub org/user name.
  projectName: 'styled-atomics', // Usually your repo name.
  themes: ['@docusaurus/theme-live-codeblock'],
  themeConfig: {
    playgroundPosition: 'bottom',
    navbar: {
      title: 'StyledBox',
      logo: {
        alt: 'My Styledbox Project Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // Please keep GitHub link to the right for consistency.
        {
          href: 'https://github.com/afeiship/styled-atomics',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}],
          ],
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      path.resolve(__dirname, 'plugins/module-alias'),
      {
        alias: {
          '@jswork/styled-box': path.resolve(
            __dirname,
            '../styled-box/src/main.ts',
          ),
        },
      },
    ],
  ],
};
