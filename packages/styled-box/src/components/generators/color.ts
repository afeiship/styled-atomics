export default (options) => {
  const { props, data } = options;
  const { c, c_, sub } = props;

  const values = props.engine.css`
    ${c && 'color:' + c + ';'}
    ${c_ && '> ' + sub + ' { color: ' + c_ + '}'}
  `;

  options.data = data.concat(values);
  return options;
};
