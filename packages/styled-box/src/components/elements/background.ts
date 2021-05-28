import { css } from 'styled-components';

export default (options) => {
  const { props, data } = options;
  const { bg } = props;

  const values = css`
    ${bg && 'background:' + bg + ';'}
  `;

  options.data = data.concat(values);
  return options;
};
