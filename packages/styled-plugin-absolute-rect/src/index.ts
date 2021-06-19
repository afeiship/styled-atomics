import StyledAbstractPlugin from '@jswork/styled-abstract-plugin';
import css from '@jswork/styled-css';

export default class extends StyledAbstractPlugin {
  get name(): string {
    return 'absolute-rect';
  }

  public pipe() {
    if (!this.current) return;
    const { val, unit } = this.entity.props;
    const { name, value } = this.current;
    const suffix = val!(value || 0) + unit;
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
    `;
  }
}
