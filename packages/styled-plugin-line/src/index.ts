import StyledAbstractPlugin from '@jswork/styled-abstract-plugin';
import css from '@jswork/styled-css';

export default class extends StyledAbstractPlugin {
  get name(): string {
    return 'line';
  }

  get defaults() {
    return { value: 1, style: 'solid', color: '#ebedf0' };
  }

  public pipe() {
    if (!this.current) return;
    const { color, style, value } = this.current;
    const { val, unit } = this.entity.props;
    const height = val!(value) + unit;

    this.values = css`
      border-bottom: ${height} ${style} ${color};
    `;
  }
}
