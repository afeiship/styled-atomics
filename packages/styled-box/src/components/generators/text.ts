import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { ws } = props;

  const values = css`
    ${ws && 'white-space:' + ws + ';'}
  `;

  options.data = data.concat(values);
  return options;
};
