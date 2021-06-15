import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { val, f, f_, sub, unit } = props;

  const values = css`
    ${f && 'font-size:' + val(f) + unit + ';'}
    ${f_ && '> ' + sub + ' { font-size: ' + val(f_) + unit + '}'}
  `;

  options.data = data.concat(values);
  return options;
};
