import AbstractPlugin from '../plugin';

export default class extends AbstractPlugin {
  get name(): string {
    return 'transform-center';
  }

  public pipe() {
    if (!this.current) return;
    const { name, value } = this.current;
    this.values = this.styledCss`
      ${name === this.name && 'position: absolute;'}
      ${value === 'x' && 'left: 50%; transform: translateX(-50%);'}
      ${value === 'y' && 'top: 50%; transform: translateY(-50%);'}
      ${value === 'xy' && 'left: 50%; top: 50%; transform: translate(-50%, -50%);'}
    `;
  }
}
