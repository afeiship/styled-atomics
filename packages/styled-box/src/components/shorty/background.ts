import { css } from 'styled-components';

export default (options) => {
  const { props, data } = options;
  const { bgn } = props;

  const values = css`
    ${bgn && 'background: none;'}
  `;

  options.data = data.concat(values);
  return options;
};
