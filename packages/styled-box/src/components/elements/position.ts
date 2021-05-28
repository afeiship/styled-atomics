import { css } from 'styled-components';
import positionValue from '@jswork/position-value';

export default (options) => {
  const { props, data } = options;
  const { relative, abs, fixed, sticky, t, r, b, l, trbl0, unit } = props;
  const position = positionValue({ relative, abs, fixed, sticky });

  const values = css`
    ${position && 'position:' + position + ';'}
    ${t && 'top:' + t + unit + ';'}
    ${r && 'right:' + r + unit + ';'}
    ${b && 'bottom:' + b + unit + ';'}
    ${l && 'left:' + l + unit + ';'}
    ${trbl0 && 'top:0; right:0; bottom:0; left:0;'}
  `;

  options.data = data.concat(values);

  return options;
};
