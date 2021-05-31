export default (options) => {
  const { props, data } = options;
  const { circle, round, rect } = props;

  const values = props.engine.css`
    ${circle && 'border-radius: 50%;'}
    ${round && 'border-radius: 1000px;'}
    ${rect && 'border-radius: none;'}
  `;

  options.data = data.concat(values);
  return options;
};
