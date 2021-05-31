import { css } from 'styled-components';

export default (options) => {
  const { props, data } = options;
  const { w100, min100, x, max100 } = props;

  const values = css`
    ${w100 && 'height: 100%;'}
    ${min100 && x && 'min-width: 100%;'}
    ${max100 && x && 'max-width: 100%;'}
  `;

  options.data = data.concat(values);
  return options;
};
