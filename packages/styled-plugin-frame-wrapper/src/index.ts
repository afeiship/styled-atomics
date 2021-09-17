import StyledAbstractPlugin from '@jswork/styled-abstract-plugin';
import css from '@jswork/styled-css';

export default class extends StyledAbstractPlugin {
  get name(): string {
    return 'frame-wrapper';
  }

  get aliases(): string[] {
    return ['frame'];
  }

  get defaults() {
    return { value: 'cover' };
  }

  public pipe() {
    if (!this.current) return;
    const { value } = this.current;
    const { sub } = this.entity.props;
    this.values = css`
      position: relative;
      overflow: hidden;
      display: inline-block;
      > ${sub} {
        object-fit: ${value};
        width: 100%;
        height: 100%;
      }
    `;
  }
}
