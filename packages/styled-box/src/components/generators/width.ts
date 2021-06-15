import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { w, wp, w1, unit } = props;

  const values = css`
    ${w && 'width:' + w + unit + ';'}
    ${wp && 'width:' + wp * 10 + '%;'}
    ${w1 && 'width:' + 100 / w1 + '%;'}
  `;

  options.data = data.concat(values);
  return options;
};
