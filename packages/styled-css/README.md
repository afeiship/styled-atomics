# styled-css
> Zero-runtime CSS string creator in JS library.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/styled-css
```

## usage
```js
import css from '@jswork/styled-css';

const bg = '#f00';
const bg_ = '#f50';
const results = css`
  ${bg && 'background: ' + bg + ';'}
  ${bg_ && '> * { background: ' + bg + '; }'}
`;


// results
[
  '\n      ',
  'background: #f00;',
  '\n      ',
  '> * { background: #f00; }',
  '\n    '
] 
```

## license
Code released under [the MIT license](https://github.com/afeiship/styled-css/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/styled-css
[version-url]: https://npmjs.org/package/@jswork/styled-css

[license-image]: https://img.shields.io/npm/l/@jswork/styled-css
[license-url]: https://github.com/afeiship/styled-css/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/styled-css
[size-url]: https://github.com/afeiship/styled-css/blob/master/dist/styled-css.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/styled-css
[download-url]: https://www.npmjs.com/package/@jswork/styled-css
