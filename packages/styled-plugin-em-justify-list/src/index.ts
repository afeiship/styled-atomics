import StyledAbstractPlugin from '@jswork/styled-abstract-plugin';
import css from '@jswork/styled-css';

// https://github.com/afeiship/wsui-em-justify-list

export default class extends StyledAbstractPlugin {
  get aliases(): string[] {
    return ['emlist'];
  }

  get name(): string {
    return 'em-justify-list';
  }

  get defaults() {
    return { unit: 0.5 };
  }

  public pipe() {
    if (!this.current) return;
    const { unit, value } = this.current;
    const { props } = this.entity;
    const percentage = `${100 / value}%`;

    this.values = css`
      margin: -${unit}em;
      overflow: hidden;

      > ${props.sub} {
        box-sizing: border-box;
        float: left;
        margin: ${unit}em;
        width: calc(${percentage} - ${2 * unit}em);
      }
    `;
  }
}
