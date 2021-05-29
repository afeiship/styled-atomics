import { css } from 'styled-components';

export default (options) => {
  const { props, data } = options;
  const { fl, fr } = props;

  const values = css`
    ${fl && 'float: left;'}
    ${fr && 'float: right;'}
  `;
  options.data = data.concat(values);
  return options;
};
