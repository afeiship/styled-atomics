export default (options) => {
  const { props, data } = options;
  const { clearfix } = props;

  if (clearfix) {
    const values = props.engine.css`
      &:before,
      &:after {
        content: ' '; /* 1 */
        display: table; /* 2 */
      }
      &:after {
        clear: both;
      }
    `;
    options.data = data.concat(values);
  }

  return options;
};
