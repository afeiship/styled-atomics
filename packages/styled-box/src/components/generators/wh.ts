import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { val, wh, unit, unitless} = props;
  const _unit = unitless ? '' : unit;

  const values = css`
    ${wh && 'width:' + val(wh) + _unit + '; height: ' + val(wh) + _unit + ';'}
  `;
  options.data = data.concat(values);

  return options;
};
