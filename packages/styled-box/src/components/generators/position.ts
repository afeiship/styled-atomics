import css from '@jswork/styled-css';

const getValue = (val)=>{
  return [
    'top:' + val + ';',
    'right:' + val + ';',
    'bottom:' + val + ';',
    'left:' + val + ';',
  ].join('')
}

export default (options) => {
  const { props, data } = options;
  const { val, t, r, b, l, trbl, unit } = props;

  const values = css`
    ${t && 'top:' + val(t) + unit + ';'}
    ${r && 'right:' + val(r) + unit + ';'}
    ${b && 'bottom:' + val(b) + unit + ';'}
    ${l && 'left:' + val(l) + unit + ';'}
    ${trbl && getValue(val!(trbl) + unit)}
  `;

  options.data = data.concat(values);

  return options;
};
