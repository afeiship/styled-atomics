import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { val, f, f_, sub, unit, unitless } = props;
  const _unit = unitless ? '' : unit;

  const values = css`
    ${f && 'font-size:' + val(f) + _unit + ';'}
    ${f_ && '> ' + sub + ' { font-size: ' + val(f_) + _unit + '}'}
  `;

  options.data = data.concat(values);
  return options;
};
