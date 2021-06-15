import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { val, blank, unit } = props;

  if (blank) {
    const values = css`
      display: block;
      font-size: 0;
      overflow: hidden;
      clear: both;
      height: ${val(blank) + unit};
    `;
    options.data = data.concat(values);
  }
  return options;
};
