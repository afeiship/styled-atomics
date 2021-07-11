import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { val, blank, unit, unitless } = props;
  const _unit = unitless ? '' : unit;
  const isExist = (v) => v in props;

  if (isExist('blank')) {
    const values = css`
      display: block;
      font-size: 0;
      overflow: hidden;
      clear: both;
      height: ${val(blank) + _unit};
    `;
    options.data = data.concat(values);
  }
  return options;
};
