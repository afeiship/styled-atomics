export default (options) => {
  const { props, data } = options;
  const { bgn } = props;

  const values = props.engine.css`
    ${bgn && 'background: none;'}
  `;

  options.data = data.concat(values);
  return options;
};
