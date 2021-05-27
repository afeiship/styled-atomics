import { css } from 'styled-components';
import { Flexbox } from '../types';
// https://github.com/afeiship/wsui-layout-trbla
// https://dev.to/yuschick/logical-css-with-simple-styled-components-mixins-21i8

export default ({ wrap, value }: Flexbox) => css`
  display: flex;
  box-sizing: border-box;
  flex-wrap: ${wrap ? 'wrap' : 'nowrap'};
  /* center */
  ${value === 'center' && 'align-items: center; justify-content: center;'}

  /* la\lar\ar\lr */
  ${(value === 'la' || value === 'lar' || value === 'ar' || value === 'lr') &&
  'width: 100%; flex-direction: row;'}

  /* ta|tab|ab|tb */
  ${(value === 'ta' || value === 'tab' || value === 'ab' || value === 'tb') &&
  'height: 100%; flex-direction: column;'}

  /* la|lar|ta|tab */
  ${(value === 'la' || value === 'lar' || value === 'ta' || value === 'tab') &&
  '& > * { &:nth-child(2) { flex: 1; } }'}

  /* ab|ar */
  ${(value === 'ar' || value === 'ab') && '& > * { &:nth-child(1) { flex: 1; } }'}

  /* lr|tb */
  ${(value === 'lr' || value === 'tb') && 'justify-content: space-between;'}
`;
