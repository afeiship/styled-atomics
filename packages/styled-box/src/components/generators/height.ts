export default (options) => {
  const { props, data } = options;
  const { h, hp, unit } = props;

  const values = props.engine.css`
    ${h && 'height:' + h + unit + ';'}
    ${hp && 'height:' + hp * 10 + '%;'}
  `;

  options.data = data.concat(values);
  return options;
};
