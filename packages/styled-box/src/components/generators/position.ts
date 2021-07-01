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
  const { val, t, r, b, l, trbl, unit, unitless} = props;
  const _unit = unitless ? '' : unit;

  const values = css`
    ${t && 'top:' + val(t) + _unit + ';'}
    ${r && 'right:' + val(r) + _unit + ';'}
    ${b && 'bottom:' + val(b) + _unit + ';'}
    ${l && 'left:' + val(l) + _unit + ';'}
    ${trbl && getValue(val!(trbl) + _unit)}
  `;

  options.data = data.concat(values);

  return options;
};
