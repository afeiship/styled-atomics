export default (options) => {
  const { props, data } = options;
  const { bdw, bds, bdc, unit } = props;

  const values = props.engine.css`
    ${bdw && 'border-width: ' + bdw + unit + ';'}
    ${bds && 'border-style: ' + bds + ';'}
    ${bdc && 'border-color: ' + bdc + ';'}
  `;
  options.data = data.concat(values);
  return options;
};
