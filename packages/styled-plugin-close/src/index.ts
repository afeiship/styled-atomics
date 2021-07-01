import StyledAbstractPlugin from '@jswork/styled-abstract-plugin';
import css from '@jswork/styled-css';

// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_arrows

export default class extends StyledAbstractPlugin {
  get name(): string {
    return 'close';
  }

  get defaults() {
    return { value: 10, thick: 1 };
  }

  public pipe() {
    if (!this.current) return;
    const { value, thick } = this.current;
    const left = (100 - value * 10) / 2 + '%';

    this.values = css`
      position: relative;
      display: inline-block;
      color: #000;
      width: 2em;
      height: 2em;
      overflow: hidden;

      &:before,
      &:after {
        content: '';
        position: absolute;
        width: ${value * 10}%;
        top: 50%;
        left: ${left};
        border-top: 0.1em solid;
        border-width: ${thick / 10}em;
      }

      &:before {
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
      }

      &:after {
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }
    `;
  }
}
