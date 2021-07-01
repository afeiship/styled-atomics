import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { val, w, wp, w1, unit, unitless } = props;
  const _unit = unitless ? '' : unit;

  const values = css`
    ${w && 'width:' + val(w) + _unit + ';'}
    ${wp && 'width:' + wp * 10 + '%;'}
    ${w1 && 'width:' + 100 / w1 + '%;'}
  `;

  options.data = data.concat(values);
  return options;
};
