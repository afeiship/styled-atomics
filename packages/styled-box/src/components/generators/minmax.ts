import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { val, unit, minw, maxw, minh, maxh, minmaxw, minmaxh, unitless } = props;
  const _unit = unitless ? '' : unit;

  const values = css`
    ${minw && 'min-width:' + val(minw) + _unit + ';'}
    ${minh && 'min-height:' + val(minh) + _unit + ';'}
    ${maxw && 'max-width:' + val(maxw) + _unit + ';'}
    ${maxh && 'max-height:' + val(maxh) + _unit + ';'}
    ${minmaxw && 'min-width:' + val(minmaxw[0]) + _unit + ';' + 'max-width:' + val(minmaxw[1]) + _unit + ';'}
    ${minmaxh && 'min-height:' + val(minmaxh[0]) + _unit + ';' + 'max-height:' + val(minmaxh[1]) + _unit + ';'}
  `;

  options.data = data.concat(values);
  return options;
};
