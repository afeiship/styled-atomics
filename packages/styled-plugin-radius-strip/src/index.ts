import StyledAbstractPlugin from '@jswork/styled-abstract-plugin';
import css from '@jswork/styled-css';

export default class extends StyledAbstractPlugin {
  get name(): string {
    return 'radius-strip';
  }

  public pipe() {
    if (!this.current) return;
    const { name, value } = this.current;
    if (name === this.name) {
      this.values = css`
        ${value.includes('t0') &&
        'border-top-left-radius: 0!important; border-top-right-radius:0!important;'};
        ${value.includes('r0') &&
        'border-top-right-radius: 0!important; border-bottom-right-radius:0!important;'};
        ${value.includes('b0') &&
        'border-bottom-left-radius: 0!important; border-bottom-right-radius:0!important;'};
        ${value.includes('l0') &&
        'border-bottom-left-radius: 0!important; border-top-left-radius:0!important;'};
      `;
    }
  }
}
