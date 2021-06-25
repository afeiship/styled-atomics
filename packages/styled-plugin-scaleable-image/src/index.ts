import StyledAbstractPlugin from '@jswork/styled-abstract-plugin';
import css from '@jswork/styled-css';

export default class extends StyledAbstractPlugin {
  get name(): string {
    return 'scaleable-image';
  }

  get defaults() {
    return { duration: '0.3s', value: 1.05 };
  }

  public pipe() {
    if (!this.current) return;
    const { name, value, duration } = this.current;
    this.values = css`
      ${name === this.name && 'display: block; overflow: hidden;'}
      .is-scaleable {
        transition: all ease-out ${duration};
      }

      &:hover {
        .is-scaleable {
          transform: scale(${value}, ${value});
        }
      }
    `;
  }
}
