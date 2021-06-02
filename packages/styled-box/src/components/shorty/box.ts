import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { bgdn, wh100 } = props;

  const values = css`
    ${bgdn && 'border:none; background: none;'}
    ${wh100 && 'width: 100%; height: 100%;'}
  `;

  options.data = data.concat(values);
  return options;
};
