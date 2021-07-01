import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { val, radius, unit, unitless } = props;
  const _unit = unitless ? '' : unit;

  const values = css`
    ${radius && 'border-radius:' + val(radius) + _unit + ';'}
  `;

  options.data = data.concat(values);
  return options;
};
