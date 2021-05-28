import { css } from 'styled-components';

export default (options) => {
  const { props, data } = options;
  const { flexbox } = props;

  if (flexbox) {
    const { wrap, value, align, justify } = flexbox;
    const values = css`
      display: flex;
      box-sizing: border-box;
      flex-wrap: ${wrap ? 'wrap' : 'nowrap'};
      /* align */
      ${align && 'align-items:' + align + ';'}
      /* justify */
      ${justify && 'justify-content:' + justify + ';'}

      /* center */
      ${value === 'center' && 'align-items: center; justify-content: center;'}

      /* la\lar\ar\lr */
      ${(value === 'la' || value === 'lar' || value === 'ar' || value === 'lr') && 'width: 100%; flex-direction: row;'}

      /* ta|tab|ab|tb */
      ${(value === 'ta' || value === 'tab' || value === 'ab' || value === 'tb') && 'height: 100%; flex-direction: column;'}

      /* la|lar|ta|tab */
      ${(value === 'la' || value === 'lar' || value === 'ta' || value === 'tab') && '& > * { &:nth-child(2) { flex: 1; } }'}

      /* ab|ar */
      ${(value === 'ar' || value === 'ab') && '& > * { &:nth-child(1) { flex: 1; } }'}

      /* lr|tb */
      ${(value === 'lr' || value === 'tb') && 'justify-content: space-between;'}
    `;

    options.data = data.concat(values);
  }

  return options;
};
