import { css } from 'styled-components';

export default (options) => {
  const { props, data } = options;
  const { radius, circle, round, unit } = props;

  const values = css`
    ${radius && 'border-radius:' + radius + unit + ';'}
    ${circle && 'border-radius: 50%;'}
    ${round && 'border-radius: 10000px;'}
  ` as Array<string>;

  options.data = [].concat(data, values);
  return options;
};
