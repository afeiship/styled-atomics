export default (options) => {
  const { props, data } = options;
  const { lc } = props;

  if (lc) {
    const values = props.engine.css`
      overflow: hidden;
      text-overflow: ellipsis;
      display: flex;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      ${lc && '-webkit-line-clamp: ' + lc +';'}
    `;
    options.data = data.concat(values);
  }

  return options;
};
