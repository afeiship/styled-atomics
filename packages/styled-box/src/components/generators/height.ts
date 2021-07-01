import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { val, h, hp, unit, unitless } = props;
  const _unit = unitless ? '' : unit;

  const values = css`
    ${h && 'height:' + val(h) + _unit + ';'}
    ${hp && 'height:' + hp * 10 + '%;'}
  `;

  options.data = data.concat(values);
  return options;
};
