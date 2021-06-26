import StyledAbstractPlugin from '@jswork/styled-abstract-plugin';
import css from '@jswork/styled-css';

// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_arrows

const DIREACTION_DEG = {
  top: '-135deg',
  right: '-45deg',
  bottom: '45deg',
  left: '135deg'
};

export default class extends StyledAbstractPlugin {
  get name(): string {
    return 'arrow';
  }

  get defaults() {
    return { value: 'right', thick: 1, size: 3, color: 'gray' };
  }

  public pipe() {
    if (!this.current) return;
    const { name, value, size, thick, color } = this.current;
    const { val, unit } = this.entity.props;
    const thickness = val!(thick) + unit;
    const padding = val!(size) + unit;

    this.values = css`
      display: inline-flex;
      vertical-align: baseline;
      align-items: center;
      &:after {
        content: '';
        border: solid ${color};
        border-width: 0 ${thickness} ${thickness} 0;
        display: inline-block;
        padding: ${padding};
        transform: rotate(${DIREACTION_DEG[value]});
      }
    `;
  }
}
