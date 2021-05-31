import { AbstractPlugin } from '../plugin';

export default class extends AbstractPlugin {
  get name(): string {
    return 'radius-strip';
  }

  public pipe() {
    if (!this.current) return;
    const { name, value } = this.current;
    if (name === this.name) {
      this.values = this.styledCss`
      ${value.includes('t0') && 'border-top-left-radius: 0; border-top-right-radius:0;'};
      ${value.includes('r0') && 'border-top-right-radius: 0; border-bottom-right-radius:0;'};
      ${value.includes('b0') && 'border-bottom-left-radius: 0; border-bottom-right-radius:0;'};
      ${value.includes('l0') && 'border-bottom-left-radius: 0; border-top-left-radius:0;'};
    `;
    }
  }
}
