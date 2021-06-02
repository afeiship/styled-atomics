import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { fl, fr, fl_, fr_, sub } = props;

  const values = css`
    ${fl && 'float: left;'}
    ${fr && 'float: right;'}
    ${fl_ && '> ' + sub + ' { float: ' + fl_ + '; }'}
    ${fr_ && '> ' + sub + ' { float: ' + fr_ + '; }'}
  `;
  options.data = data.concat(values);
  return options;
};
