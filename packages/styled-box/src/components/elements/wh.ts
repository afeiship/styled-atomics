import { css } from 'styled-components';

export default (options) => {
  const { props, data } = options;
  const { wh, wh100, unit } = props;

  if (wh) {
    const values = css`
      ${wh && 'width:' + wh + unit + '; height: ' + wh + unit + ';'}
      ${wh100 && 'width: 100%; height: 100%;'}
    `;
    options.data = data.concat(values);
  }

  return options;
};
