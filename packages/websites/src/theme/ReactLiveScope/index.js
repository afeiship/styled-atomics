/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import View from '@jswork/styled-box';
import styled from 'styled-components';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import '@jswork/next-range';
import '@jswork/next-random-avatar';

Object.assign(View.defaultProps, {
  styled,
  plugins: [
    require('@jswork/styled-plugin-absolute-center').default,
    require('@jswork/styled-plugin-absolute-rect').default,
    require('@jswork/styled-plugin-em-justify-list').default,
    require('@jswork/styled-plugin-flexbox').default,
    require('@jswork/styled-plugin-list').default,
    require('@jswork/styled-plugin-arrow').default,
    require('@jswork/styled-plugin-line').default,
    require('@jswork/styled-plugin-close').default,
    require('@jswork/styled-plugin-fixed-toolbar').default,
    require('@jswork/styled-plugin-radius-strip').default,
    require('@jswork/styled-plugin-scaleable-image').default,
    require('@jswork/styled-plugin-shadow').default,
    require('@jswork/styled-plugin-position-box').default,
    require('@jswork/styled-plugin-transform-center').default,
    require('@jswork/styled-plugin-responsive-list').default
  ]
});

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  Tabs,
  TabItem,
  View,
  styled
};

export default ReactLiveScope;
