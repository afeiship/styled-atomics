import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { h100, v100, vh100, min100, minh100, maxh100, y, max100 } = props;

  const values = css`
    ${h100 && 'height: 100%;'}
    ${v100 && y && 'height: 100vh;'};
    ${vh100 && 'height: 100vh;'};
    ${min100 && y && 'min-height: 100%;'}
    ${minh100 && 'min-height: 100%;'}
    ${max100 && y && 'max-height: 100%;'}
    ${maxh100 && 'max-height: 100%;'}
  `;

  options.data = data.concat(values);
  return options;
};
