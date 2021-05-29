import { css } from 'styled-components';

export default (options) => {
  const { props, data } = options;
  const { bsb, bsc } = props;

  const values = css`
    ${bsb && 'box-sizing: border-box;'}
    ${bsc && 'box-sizing: content-box;'}
  `;

  options.data = data.concat(values);
  return options;
};
