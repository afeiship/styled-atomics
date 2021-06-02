import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { lh, hlh } = props;

  const values = css`
    ${lh && 'line-height:' + lh + ';'}
    ${hlh && 'line-height:' + hlh + ';' + 'height:' + hlh + ';'}
  `;

  options.data = data.concat(values);
  return options;
};
