import { css } from 'styled-components';

export default (options) => {
  const { props, data } = options;
  const { radius, circle, round, unit } = props;

  const values = css`
    ${radius && 'border-radius:' + radius + unit + ';'}
    ${circle && 'border-radius: 50%;'}
    ${round && 'border-radius: 10000px;'}
  `;

  options.data = data.concat(values);
  return options;
};
