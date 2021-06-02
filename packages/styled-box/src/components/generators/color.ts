import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { c, c_, sub } = props;

  const values = css`
    ${c && 'color:' + c + ';'}
    ${c_ && '> ' + sub + ' { color: ' + c_ + '}'}
  `;

  options.data = data.concat(values);
  return options;
};
