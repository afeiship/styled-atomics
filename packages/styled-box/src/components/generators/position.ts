import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { val, t, r, b, l, unit } = props;

  const values = css`
    ${t && 'top:' + val(t) + unit + ';'}
    ${r && 'right:' + val(r) + unit + ';'}
    ${b && 'bottom:' + val(b) + unit + ';'}
    ${l && 'left:' + val(l) + unit + ';'}
  `;

  options.data = data.concat(values);

  return options;
};
