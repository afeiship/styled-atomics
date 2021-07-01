import StyledAbstractPlugin from '@jswork/styled-abstract-plugin';
import css from '@jswork/styled-css';

export default class extends StyledAbstractPlugin {
  get aliases(): string[] {
    return ['center'];
  }

  get name(): string {
    return 'transform-center';
  }

  get defaults() {
    return { value: 'xy' };
  }

  public pipe() {
    if (!this.current) return;
    const { value } = this.current;
    this.values = css`
      position: absolute;
      ${value === 'x' && 'left: 50%; transform: translateX(-50%);'}
      ${value === 'y' && 'top: 50%; transform: translateY(-50%);'}
      ${value === 'xy' && 'left: 50%; top: 50%; transform: translate(-50%, -50%);'}
    `;
  }
}
