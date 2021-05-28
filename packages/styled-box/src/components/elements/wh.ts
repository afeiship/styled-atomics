import { css } from 'styled-components';

export default (options) => {
  const { props, data } = options;
  const { wh, unit } = props;

  if (wh) {
    const values = css`
      ${wh && 'width:' + wh + unit + '; height: ' + wh + unit + ';'}
    `;
    options.data = data.concat(values);
  }

  return options;
};
