export default (options) => {
  const { props, data } = options;
  const { bdn } = props;

  const values = props.engine.css`
    ${bdn && 'border: none;'}
  `;

  options.data = data.concat(values);
  return options;
};
