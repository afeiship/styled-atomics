import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { val, h, hp, unit } = props;

  const values = css`
    ${h && 'height:' + val(h) + unit + ';'}
    ${hp && 'height:' + hp * 10 + '%;'}
  `;

  options.data = data.concat(values);
  return options;
};
