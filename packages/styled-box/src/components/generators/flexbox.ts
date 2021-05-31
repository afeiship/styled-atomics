import { css } from 'styled-components';

export default (options) => {
  const { props, data } = options;
  const { x, y, flexbox } = props;

  if (flexbox) {
    const { wrap, value, align, justify } = flexbox;
    const values = css`
      display: flex;
      box-sizing: border-box;
      flex-wrap: ${wrap ? 'wrap' : 'nowrap'};
      ${x && 'flex-direction: row; '}
      ${y && 'flex-direction: column; '}
      /* align */
      ${align && 'align-items:' + align + ';'}
      /* justify */
      ${justify && 'justify-content:' + justify + ';'}

      /* center */
      ${value === 'center' && 'align-items: center; justify-content: center;'}

      /* la\lar\ar\lr */
      ${['la', 'lar', 'ar', 'lr'].includes(value) && 'width: 100%; flex-direction: row;'}

      /* ta|tab|ab|tb */
      ${['ta', 'tab', 'ab', 'tb'].includes(value) && 'height: 100%; flex-direction: column;'}

      /* la|lar|ta|tab */
      ${['la', 'lar', 'ta', 'tab'].includes(value) && '& > * { &:nth-child(2) { flex: 1; } }'}

      /* ab|ar */
      ${['ar', 'ab'].includes(value) && '& > * { &:nth-child(1) { flex: 1; } }'}

      /* lr|tb */
      ${['lr', 'tb'].includes(value) && 'justify-content: space-between;'}
    `;

    options.data = data.concat(values);
  }

  return options;
};
