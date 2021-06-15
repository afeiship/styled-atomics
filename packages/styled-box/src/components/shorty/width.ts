import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { w100, v100, min100, x, max100 } = props;

  const values = css`
    ${w100 && 'width: 100%;'}
    ${v100 && x && 'width: 100vw;'};
    ${min100 && x && 'min-width: 100%;'}
    ${max100 && x && 'max-width: 100%;'}
  `;

  options.data = data.concat(values);
  return options;
};
