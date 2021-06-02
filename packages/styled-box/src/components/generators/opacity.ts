import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { o } = props;

  const values = css`
    ${typeof o !== 'undefined' && 'opacity:' + o / 10 + ';'}
  `;

  options.data = data.concat(values);
  return options;
};
