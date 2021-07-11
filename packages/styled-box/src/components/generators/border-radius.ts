import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { val, radius, radius_, sub, unit, unitless } = props;
  const _unit = unitless ? '' : unit;
  const isExist = (v) => v in props;

  const values = css`
    ${isExist('radius') && 'border-radius:' + val(radius) + _unit + ';'}
    ${isExist('radius_') && '> ' + sub + ' { border-radius: ' + val(radius_) + _unit + '; }'}
  `;

  options.data = data.concat(values);
  return options;
};
