import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { o, opactiy } = props;
  const isExist = (v) => v in props;

  const values = css`
    ${opactiy && 'opactiy:' + opactiy + ';'}
    ${isExist('o') && 'opacity:' + o / 10 + ';'}
  `;

  options.data = data.concat(values);
  return options;
};
