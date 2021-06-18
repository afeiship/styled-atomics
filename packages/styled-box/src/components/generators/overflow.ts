import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { ov, ovx, ovy } = props;

  const values = css`
    ${ov && 'overflow:' + ov + ';'}
    ${ovx && 'overflow-x:' + ovx + ';'}
    ${ovy && 'overflow-y:' + ovy + ';'}
  `;

  options.data = data.concat(values);
  return options;
};
