import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { flex } = props;
  const value = Number(flex);

  const values = css`
    ${flex && 'flex:' + value + ';'}
  `;

  options.data = data.concat(values);
  return options;
};
