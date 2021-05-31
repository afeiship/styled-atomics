export default (options) => {
  const { props, data } = options;
  const { cd, cm, cp, pn } = props;

  const values = props.engine.css`
    ${cd && 'cursor: default;'}
    ${cp && 'cursor: pointer;'}
    ${cm && 'cursor: move;'}
    ${pn && 'pointer-events: none;'}
  `;

  options.data = data.concat(values);
  return options;
};
