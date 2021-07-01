import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { lh, hlh, unit, unitless, val } = props;
  const _unit = unitless ? '' : unit;

  const values = css`
    ${lh && 'line-height:' + val!(lh) + _unit + ';'}
    ${hlh && 'line-height:' + val!(hlh) + _unit + ';' + 'height:' + val!(hlh) + _unit + ';'}
  `;

  options.data = data.concat(values);
  return options;
};
