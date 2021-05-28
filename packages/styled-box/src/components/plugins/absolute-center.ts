import { css } from 'styled-components';

export default (options) => {
  const { props, data } = options;
  const { plugin } = props;

  if (plugin) {
    const values = css`
      ${plugin.includes('absolute-center') && 'position: absolute; margin: auto;'}
      ${(plugin === 'absolute-center:x' || plugin === 'absolute-center:xy') && 'left:0; right:0;'}
      ${(plugin === 'absolute-center:y' || plugin === 'absolute-center:xy') && 'top:0; bottom:0;'}
    `;
    options.data = data.concat(values);
  }

  return options;
};
