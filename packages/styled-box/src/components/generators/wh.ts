import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { val, wh, unit } = props;

  const values = css`
    ${wh && 'width:' + val(wh) + unit + '; height: ' + val(wh) + unit + ';'}
  `;
  options.data = data.concat(values);

  return options;
};
