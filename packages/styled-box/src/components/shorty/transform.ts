export default (options) => {
  const { props, data } = options;
  const { tsy5, tsx5, tsxy5 } = props;

  const values = props.engine.css`
    ${tsy5 && 'transform: translateY(-50%);'}
    ${tsx5 && 'transform: translateX(-50%);'}
    ${tsxy5 && 'transform: translate(-50%, -50%);'}
  `;

  options.data = data.concat(values);
  return options;
};
