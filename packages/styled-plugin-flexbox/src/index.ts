import StyledAbstractPlugin from '@jswork/styled-abstract-plugin';
import css from '@jswork/styled-css';

export default class extends StyledAbstractPlugin {
  get name(): string {
    return 'flexbox';
  }

  public pipe() {
    if (!this.current) return;
    const { name, value } = this.current;
    if (name === this.name) {
      this.values = css`
        display: flex;
        box-sizing: border-box;

        /* center */
        ${value === 'center' && 'align-items: center; justify-content: center;'}

        /* la\lar\ar\lr */
        ${['la', 'lar', 'ar', 'lr'].includes(value) && 'flex-direction: row;'}

        /* ta|tab|ab|tb */
        ${['ta', 'tab', 'ab', 'tb'].includes(value) && 'flex-direction: column;'}

        /* la|lar|ta|tab */
        ${['la', 'lar', 'ta', 'tab'].includes(value) && '& > * { &:nth-child(2) { flex: 1; } }'}

        /* ab|ar */
        ${['ar', 'ab'].includes(value) && '& > * { &:nth-child(1) { flex: 1; } }'}

        /* lr|tb */
        ${['lr', 'tb'].includes(value) && 'justify-content: space-between;'}
      `;
    }
  }
}
