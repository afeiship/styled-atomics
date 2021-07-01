/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

const globby = require('globby');
const getMenus = (key) =>
  globby.sync(`docs/${key}/*.mdx`).map((item) => item.slice(5, -4));

module.exports = {
  someSidebar: {
    开始: getMenus('get-started'),
    生成器: getMenus('generators'),
    简写: getMenus('shortys'),
    插件: getMenus('plugins'),
  },
};
