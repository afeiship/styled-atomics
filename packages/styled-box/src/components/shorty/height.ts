export default (options) => {
  const { props, data } = options;
  const { h100, min100, y, max100 } = props;

  const values = props.engine.css`
    ${h100 && 'height: 100%;'}
    ${min100 && y && 'min-height: 100%;'}
    ${max100 && y && 'max-height: 100%;'}
  `;

  options.data = data.concat(values);
  return options;
};
