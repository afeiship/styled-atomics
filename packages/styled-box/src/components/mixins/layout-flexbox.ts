import { css } from 'styled-components';
import { Flexbox } from '../types';
// https://github.com/afeiship/wsui-layout-trbla
// https://dev.to/yuschick/logical-css-with-simple-styled-components-mixins-21i8

export default (props: Flexbox) => css`
  display: flex;
  flex-wrap: ${props.wrap ? 'wrap' : 'no-wrap'};
  ${props.value === 'center' && 'align-items: center; justify-content: center;'}
`;
