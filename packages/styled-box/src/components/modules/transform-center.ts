import { css } from 'styled-components';

export default (options) => {
  const { props, data } = options;
  const { wsui } = props;

  if (wsui) {
    const values = css`
      ${wsui.includes('transform-center') && 'position: absolute;'}
      ${wsui === 'transform-center:x' && 'left: 50%; transform: translateX(-50%);'}
      ${wsui === 'transform-center:y' && 'top: 50%; transform: translateY(-50%);'}
      ${wsui === 'transform-center:xy' && 'left: 50%; top: 50%; transform: translate(-50%, -50%);'}
    `;
    options.data = data.concat(values);
  }

  return options;
};
