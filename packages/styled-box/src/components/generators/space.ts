import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { val, spx, spy, unit, unitless, x, y, strip } = props;
  const _unit = unitless ? '' : unit;

  // space 为 0 的情况下，没有考虑的必要
  if (spx || spy) {
    const values = css`
      ${x && strip && '> * { &:last-child { margin-right:0 } }'}
      ${y && strip && '> * { &:last-child { margin-bottom:0 } }'}
      ${spx && ' > * { margin-right: ' + val(spx) + _unit + '; &:last-child { margin-right:0 } }'}
      ${spy && ' > * { margin-bottom: ' + val(spy) + _unit + '; &:last-child { margin-bottom:0 }}'}
    `;
    options.data = data.concat(values);
  }
  return options;
};
