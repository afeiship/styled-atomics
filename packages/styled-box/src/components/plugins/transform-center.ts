import { css } from 'styled-components';

export default (options) => {
  const { props, data } = options;
  const { plugin } = props;

  if (plugin) {
    const values = css`
      ${plugin.includes('transform-center') && 'position: absolute;'}
      ${plugin === 'transform-center:x' && 'left: 50%; transform: translateX(-50%);'}
      ${plugin === 'transform-center:y' && 'top: 50%; transform: translateY(-50%);'}
      ${plugin === 'transform-center:xy' && 'left: 50%; top: 50%; transform: translate(-50%, -50%);'}
    `;
    options.data = data.concat(values);
  }

  return options;
};
