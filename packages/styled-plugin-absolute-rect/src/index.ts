import StyledAbstractPlugin from '@jswork/styled-abstract-plugin';
import css from '@jswork/styled-css';

export default class extends StyledAbstractPlugin {
  get name(): string {
    return 'absolute-rect';
  }

  get defaults() {
    return { value: 0, x: false };
  }

  public pipe() {
    if (!this.current) return;
    const { val, unit } = this.entity.props;
    const { name, value, x } = this.current;
    const suffix = val!(value) + unit;
    const values =
      [
        'position: absolute',
        'top: ' + suffix,
        'right: ' + suffix,
        'bottom: ' + suffix,
        'left: ' + suffix
      ].join(';') + ';';

    this.values = css`
      ${name === this.name && values}
      ${x && 'overflow-x: scroll;'}
      ${!x && 'overflow-y: scroll;'}
    `;
  }
}
