export default (options) => {
  const { props, data } = options;
  const { radius, unit } = props;

  const values = props.engine.css`
    ${radius && 'border-radius:' + radius + unit + ';'}
  `;

  options.data = data.concat(values);
  return options;
};
