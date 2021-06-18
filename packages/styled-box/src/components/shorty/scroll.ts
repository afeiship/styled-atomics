import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { smooth } = props;

  const values = css`
    ${smooth && 'scroll-behavior: smooth;'}
  `;

  options.data = data.concat(values);
  return options;
};
