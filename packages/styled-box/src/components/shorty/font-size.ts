import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { f0 } = props;

  const values = css`
    ${f0 && 'font-size: 0;'}
  `;

  options.data = data.concat(values);
  return options;
};
