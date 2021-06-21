import StyledAbstractPlugin from '@jswork/styled-abstract-plugin';
import css from '@jswork/styled-css';

const MAPPING = { header: 'top', footer: 'bottom' };

export default class extends StyledAbstractPlugin {
  get name(): string {
    return 'fixed-toolbar';
  }

  public pipe() {
    if (!this.current) return;
    const { name } = this.current;

    this.values = css`
      ${name === this.name && this.generate()}
    `;
  }

  private generate(): string {
    const { val, unit } = this.entity.props;
    const { value, role, gap } = this.current!;
    const padding = val!(value + gap) + unit;
    const height = val!(value) + unit;

    return [
      `padding-${MAPPING[role]}: ${padding};`,
      `> .is-${role} { position: fixed; height: ${height}; ${MAPPING[role]}: 0; left: 0; right: 0; z-index: 2; }`
    ].join('');
  }
}
