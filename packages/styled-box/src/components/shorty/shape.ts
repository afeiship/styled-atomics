import { css } from 'styled-components';

export default (options) => {
  const { props, data } = options;
  const { circle, round, rect } = props;

  const values = css`
    ${bgdn && 'border:none; background: none;'}
    ${wh100 && 'width: 100%; height: 100%;'}
  `;

  options.data = data.concat(values);
  return options;
};
