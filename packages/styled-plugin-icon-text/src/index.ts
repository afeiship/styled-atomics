import StyledAbstractPlugin from '@jswork/styled-abstract-plugin';
import css from '@jswork/styled-css';

export default class extends StyledAbstractPlugin {
  get aliases(): string[] {
    return ['icon-text-x', 'icon-text-y'];
  }

  get name(): string {
    return 'icon-text';
  }

  get defaults() {
    return { x: true };
  }

  private computed() {
    const { name, value } = this.current!;
    if (name === 'icon-text-x') return { name, value, x: true };
    if (name === 'icon-text-y') return { name, value, x: false };
    return this.current;
  }

  public pipe() {
    if (!this.current) return;
    const { value, x } = this.computed();
    const { val, sub, unit } = this.entity.props;

    this.values = css`
      display: inline-flex;
      vertical-align: middle;
      align-items: center;
      /* Strip margin: x/y */
      ${x && '> ' + sub + '{ &:last-child{ margin-right: 0; } }'}
      ${!x && '> ' + sub + '{ &:last-child{ margin-bottom: 0; } }'}

      ${x && 'flex-direction: row;'}
      ${!x && 'flex-direction: column;'}
      ${value && x && '> ' + sub + ' { margin-right: ' + val!(value) + unit + '}'};
      ${value && !x && '> ' + sub + ' { display:block; margin-bottom: ' + val!(value) + unit + '}'};
    `;
  }
}
