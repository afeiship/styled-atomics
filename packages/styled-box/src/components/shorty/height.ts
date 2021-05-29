import { css } from 'styled-components';

export default (options) => {
  const { props, data } = options;
  const { h100, min100, h, max100 } = props;

  const values = css`
    ${h100 && 'height: 100%;'}
    ${min100 && h && 'min-height: 100%;'}
    ${max100 && h && 'max-height: 100%;'}
  `;

  options.data = data.concat(values);
  return options;
};
