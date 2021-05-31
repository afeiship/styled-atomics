export default (options) => {
  const { props, data } = options;
  const { z } = props;

  const values = props.engine.css`
    ${z && 'z-index:' + z + ';'}
  `;

  options.data = data.concat(values);
  return options;
};
