import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { val, bdw, bds, bdc, unit, unitless } = props;
  const _unit = unitless ? '' : unit;
  const isExist = (v) => v in props;

  const values = css`
    ${isExist('bdw') && 'border-width: ' + val(bdw) + _unit + ';'}
    ${bds && 'border-style: ' + bds + ';'}
    ${bdc && 'border-color: ' + bdc + ';'}
  `;
  options.data = data.concat(values);
  return options;
};
