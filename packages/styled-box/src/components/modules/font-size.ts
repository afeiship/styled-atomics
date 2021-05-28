import { css } from 'styled-components';

export default (options) => {
  const { props, data } = options;
  const { f, unit } = props;

  const values = css`
    ${f && 'font-size:' + f + unit + ';'}
  `;

  options.data = data.concat(values);
  return options;
};
