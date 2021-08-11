import StyledAbstractPlugin from '@jswork/styled-abstract-plugin';
import css from '@jswork/styled-css';

// https://css-tricks.com/look-ma-no-media-queries-responsive-layouts-using-css-grid/#top-of-site

export default class extends StyledAbstractPlugin {
  get name(): string {
    return 'responsive-list';
  }

  get defaults() {
    return { gap: 10 };
  }

  public pipe() {
    if (!this.current) return;
    const { val, unit, unitless } = this.entity.props;
    const { name, gap, value } = this.current;
    const _unit = unitless ? '' : unit;
    const suffix = val!(gap) + _unit;
    const itemValue = val!(value) + _unit;

    this.values = css`
      ${name === this.name && 'display: grid;'}
      grid-template-columns: repeat(auto-fill, minmax(${itemValue}, 1fr));
      grid-gap: ${suffix};
    `;
  }
}
