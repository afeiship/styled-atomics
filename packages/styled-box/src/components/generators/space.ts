import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { val, space, unit, x, y, strip } = props;

  if (space) {
    const values = css`
      ${x && strip && '> * { &:last-child { margin-right:0 } }'}
      ${y && strip && '> * { &:last-child { margin-bottom:0 } }'}
      ${x && space && ' > * { margin-right: ' + val(space) + unit + ';}'}
      ${y && space && ' > * { margin-bottom: ' + val(space) + unit + ';}'}
    `;
    options.data = data.concat(values);
  }
  return options;
};
