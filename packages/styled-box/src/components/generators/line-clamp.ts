import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { lc } = props;

  if (lc) {
    const values = css`
      overflow: hidden;
      text-overflow: ellipsis;
      display: flex;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      white-space: normal;
      ${lc && '-webkit-line-clamp: ' + lc + ';'}
    `;
    options.data = data.concat(values);
  }

  return options;
};
