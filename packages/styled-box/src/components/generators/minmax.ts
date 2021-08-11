import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { val, unit, minw, maxw, minh, maxh, unitless } = props;
  const _unit = unitless ? '' : unit;

  const values = css`
    ${minw && 'min-width:' + val(minw) + _unit + ';'}
    ${minh && 'min-height:' + val(minh) + _unit + ';'}
    ${maxw && 'max-width:' + val(maxw) + _unit + ';'}
    ${maxh && 'max-height:' + val(maxh) + _unit + ';'}
  `;

  options.data = data.concat(values);
  return options;
};
