import { css } from 'styled-components';

export default (options) => {
  const { props, data } = options;
  const { h, hp, h100, unit } = props;

  const values = css`
    ${h && 'height:' + h + unit + ';'}
    ${hp && 'height:' + hp * 10 + '%;'}
    ${h100 && 'height: 100%;'}
  `;

  options.data = data.concat(values);
  return options;
};
