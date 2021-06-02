import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { z } = props;

  const values = css`
    ${z && 'z-index:' + z + ';'}
  `;

  options.data = data.concat(values);
  return options;
};
