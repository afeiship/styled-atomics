import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { f, f_, sub, unit } = props;

  const values = css`
    ${f && 'font-size:' + f + unit + ';'}
    ${f_ && '> ' + sub + ' { font-size: ' + f_ + unit + '}'}
  `;

  options.data = data.concat(values);
  return options;
};
