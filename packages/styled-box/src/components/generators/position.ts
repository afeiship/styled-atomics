import css from '@jswork/styled-css';

const getValue = (val) => {
  return ['top:' + val + ';', 'right:' + val + ';', 'bottom:' + val + ';', 'left:' + val + ';'].join('');
};



export default (options) => {
  const { props, data } = options;
  const { val, sub, t, r, b, l, trbl, unit, abs_, unitless } = props;
  const _unit = unitless ? '' : unit;
  const isExist = (v) => v in props;

  const values = css`
    ${isExist('t') && 'top:' + val(t) + _unit + ';'}
    ${isExist('r') && 'right:' + val(r) + _unit + ';'}
    ${isExist('b') && 'bottom:' + val(b) + _unit + ';'}
    ${isExist('l') && 'left:' + val(l) + _unit + ';'}
    ${isExist('trbl') && getValue(val!(trbl) + _unit)}
    ${abs_ && '> ' + sub + ' { position: absolute; }'}
  `;

  options.data = data.concat(values);

  return options;
};
