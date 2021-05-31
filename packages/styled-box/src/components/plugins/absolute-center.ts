import { AbstractPlugin } from '../plugin';

export default class extends AbstractPlugin {
  get name(): string {
    return 'absolute-center';
  }

  public pipe() {
    if (!this.current) return;
    const { name, value } = this.current;
    this.values = this.styledCss`
      ${name === this.name && 'position: absolute; margin: auto;'}
      ${(value === 'x' || value === 'xy') && 'left:0; right:0;'}
      ${(value === 'y' || value === 'xy') && 'top:0; bottom:0;'}
    `;
  }
}
