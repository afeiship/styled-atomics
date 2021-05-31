export default (options) => {
  const { props, data } = options;
  const { blank, unit } = props;

  if (blank) {
    const values = props.engine.css`
      display: block;
      font-size: 0;
      overflow: hidden;
      clear: both;
      height: ${blank + unit};
    `;
    options.data = data.concat(values);
  }
  return options;
};
