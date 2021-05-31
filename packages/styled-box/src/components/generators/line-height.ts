import { css } from 'styled-components';

export default (options) => {
  const { props, data } = options;
  const { lh, hlh, unit } = props;

  const values = css`
    ${lh && 'line-height:' + lh + ';'}
    ${hlh && 'line-height:' + lh + ';' + 'height:' + hlh + unit + ';'}
  `;

  options.data = data.concat(values);
  return options;
};
