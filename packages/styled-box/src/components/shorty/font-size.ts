export default (options) => {
  const { props, data } = options;
  const { f0 } = props;

  const values = props.engine.css`
    ${f0 && 'font-size: 0;'}
  `;

  options.data = data.concat(values);
  return options;
};
