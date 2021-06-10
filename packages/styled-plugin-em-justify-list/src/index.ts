import StyledAbstractPlugin from '@jswork/styled-abstract-plugin';
import css from '@jswork/styled-css';

export default class extends StyledAbstractPlugin {
  get name(): string {
    return 'em-justify-list';
  }

  public pipe() {
    if (!this.current) return;
    const { value } = this.current;
    const { props } = this.entity;
    const percentage = `${100 / value}%`;
    this.values = css`
      margin: -0.5em;
      overflow: hidden;

      > ${props.sub} {
        box-sizing: border-box;
        float: left;
        margin: 0.5em;
        width: calc(${percentage} - 1em);
      }
    `;
  }
}
