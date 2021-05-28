import { css } from 'styled-components';

export default (options) => {
  const { props, data } = options;
  const { c } = props;

  const values = css`
    ${c && 'color:' + c + ';'}
  `;

  options.data = data.concat(values);
  return options;
};
