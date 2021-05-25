# styled-box
> Styled box for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/styled-box
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | true     | -       | The extended className for component. |
| value     | object | true     | -       | Default value.                        |
| onChange  | func   | true     | -       | The change handler.                   |


## usage
1. import css
  ```scss
  @import "~@jswork/boilerplate-react-component/dist/style.css";

  // or use sass
  @import "~@jswork/boilerplate-react-component/dist/style.scss";

  // customize your styles:
  $boilerplate-react-component-options: ()
  ```
2. import js
  ```js
__GENERATE_DAPP__
  ```

## license
Code released under [the MIT license](https://github.com/afeiship/styled-box/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/styled-box
[version-url]: https://npmjs.org/package/@jswork/styled-box

[license-image]: https://img.shields.io/npm/l/@jswork/styled-box
[license-url]: https://github.com/afeiship/styled-box/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/styled-box
[size-url]: https://github.com/afeiship/styled-box/blob/master/dist/styled-box.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/styled-box
[download-url]: https://www.npmjs.com/package/@jswork/styled-box
