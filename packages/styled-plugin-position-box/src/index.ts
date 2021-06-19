import StyledAbstractPlugin from '@jswork/styled-abstract-plugin';
import css from '@jswork/styled-css';

const MAPPING = {
  center: 'left: 50%; top: 50%; transform: translate(-50%, -50%);',
  top: 'top: 0; left: 50%; transform: translateX(-50%);',
  bottom: 'bottom: 0; left: 50%; transform: translateX(-50%);',
  left: 'left:0; top: 50%; transform: translateY(-50%);',
  right: 'right:0; top: 50%; transform: translateY(-50%);',
  tl: 'left: 0; top: 0;',
  tr: 'right: 0; top: 0;',
  br: 'right: 0; bottom: 0;',
  bl: 'left: 0; bottom: 0;'
};

export default class extends StyledAbstractPlugin {
  get name(): string {
    return 'position-box';
  }

  public pipe() {
    if (!this.current) return;
    const { value } = this.current;

    this.values = css`
      position: absolute;
      ${MAPPING[value]}
    `;
  }
}
