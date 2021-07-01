import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { val, space, unit, unitless, x, y, strip } = props;
  const _unit = unitless ? '' : unit;

  if (space) {
    const values = css`
      ${x && strip && '> * { &:last-child { margin-right:0 } }'}
      ${y && strip && '> * { &:last-child { margin-bottom:0 } }'}
      ${x && space && ' > * { margin-right: ' + val(space) + _unit + ';}'}
      ${y && space && ' > * { margin-bottom: ' + val(space) + _unit + ';}'}
    `;
    options.data = data.concat(values);
  }
  return options;
};
