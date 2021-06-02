import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { radius, unit } = props;

  const values = css`
    ${radius && 'border-radius:' + radius + unit + ';'}
  `;

  options.data = data.concat(values);
  return options;
};
