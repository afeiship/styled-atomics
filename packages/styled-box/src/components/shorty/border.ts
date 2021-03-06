import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { bdn } = props;

  const values = css`
    ${bdn && 'border: none;'}
  `;

  options.data = data.concat(values);
  return options;
};
