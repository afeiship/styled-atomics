export default (options) => {
  const { props, data } = options;
  const { t, r, b, l, unit } = props;

  const values = props.engine.css`
    ${t && 'top:' + t + unit + ';'}
    ${r && 'right:' + r + unit + ';'}
    ${b && 'bottom:' + b + unit + ';'}
    ${l && 'left:' + l + unit + ';'}
  `;

  options.data = data.concat(values);

  return options;
};
