import { css } from 'styled-components';

export default (options) => {
  const { props, data } = options;
  const { w, wp, w1, w100, unit } = props;

  const values = css`
    ${w && 'width:' + w + unit + ';'}
    ${wp && 'width:' + wp * 10 + '%;'}
    ${w1 && 'width:' + w1 / 10 + '%;'}
    ${w100 && 'width: 100%;'}
  `;

  options.data = data.concat(values);
  return options;
};
