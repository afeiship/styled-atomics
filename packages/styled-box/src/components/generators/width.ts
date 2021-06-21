import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { val, width, w, wp, w1, unit } = props;

  const values = css`
    ${width && 'width:' + width + ';'}
    ${w && 'width:' + val(w) + unit + ';'}
    ${wp && 'width:' + wp * 10 + '%;'}
    ${w1 && 'width:' + 100 / w1 + '%;'}
  `;

  options.data = data.concat(values);
  return options;
};
