export default (options) => {
  const { props, data } = options;
  const { lh, hlh } = props;

  const values = props.engine.css`
    ${lh && 'line-height:' + lh + ';'}
    ${hlh && 'line-height:' + hlh + ';' + 'height:' + hlh + ';'}
  `;

  options.data = data.concat(values);
  return options;
};
