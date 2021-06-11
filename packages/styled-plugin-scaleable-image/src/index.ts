import StyledAbstractPlugin from '@jswork/styled-abstract-plugin';
import css from '@jswork/styled-css';

export default class extends StyledAbstractPlugin {
  get name(): string {
    return 'scaleable-image';
  }

  public pipe() {
    if (!this.current) return;
    const { name, value, duration } = this.current;
    const dur = duration || '0.3s';
    const val = value || 1.05;
    this.values = css`
      ${name === this.name && 'display: block; overflow: hidden;'}
      .is-scaleable {
        transition: all ease-out ${dur};
      }

      &:hover {
        .is-scaleable {
          transform: scale(${val}, ${val});
        }
      }
    `;
  }
}
