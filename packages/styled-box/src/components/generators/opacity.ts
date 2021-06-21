import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { o, opactiy } = props;

  const values = css`
    ${opactiy && 'opactiy:' + opactiy + ';'}
    ${typeof o !== 'undefined' && 'opacity:' + o / 10 + ';'}
  `;

  options.data = data.concat(values);
  return options;
};
