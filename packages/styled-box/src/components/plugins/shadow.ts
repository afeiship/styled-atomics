import BasePlugin from '../plugin';

export default class extends BasePlugin {
  get name(): string {
    return 'shadow';
  }

  public pipe() {
    if (!this.current) return;
    const { value, inset } = this.current;
    const insetString = inset ? 'inset ' : '';
    this.values = this.styledCss`
      box-shadow: ${value == 1 && insetString + '0 1px 2px rgba(0, 0, 0, 0.2);'};
      box-shadow: ${value == 2 && insetString + '0 1px 6px rgba(0, 0, 0, 0.12);'};
      box-shadow: ${value == 3 && insetString + '0 3px 10px rgba(0, 0, 0, 0.16);'};
      box-shadow: ${value == 4 && insetString + '0 10px 30px rgba(0, 0, 0, 0.19);'};
      box-shadow: ${value == 5 && insetString + '0 14px 45px rgba(0, 0, 0, 0.25);'};
      box-shadow: ${value == 6 && insetString + '0 19px 60px rgba(0, 0, 0, 0.3);'};
    `;
  }
}
