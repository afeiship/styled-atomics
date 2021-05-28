import { css } from 'styled-components';

export default (options) => {
  const { props, data } = options;
  const { wsui } = props;

  if (wsui) {
    const values = css`
      ${wsui.includes('absolute-center') && 'position: absolute; margin: auto;'}
      ${(wsui === 'absolute-center:x' || wsui === 'absolute-center:xy') && 'left:0; right:0;'}
      ${(wsui === 'absolute-center:y' || wsui === 'absolute-center:xy') && 'top:0; bottom:0;'}
    `;
    options.data = data.concat(values);
  }

  return options;
};
