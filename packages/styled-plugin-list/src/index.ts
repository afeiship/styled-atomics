import StyledAbstractPlugin from '@jswork/styled-abstract-plugin';
import css from '@jswork/styled-css';

/**
 * 1. The last row: https://codepen.io/keithclark/pen/Hygkt
 * 2. The last column: > ${sub}:nth-child(${value}n)
 *
 * https://dockyard.com/blog/2019/04/16/css-selectors-for-the-entire-last-row-of-a-dynamic-grid
 * https://github.com/afeiship/wsui-justify-list/blob/master/src/index.scss
 */

export default class extends StyledAbstractPlugin {
  get name(): string {
    return 'list';
  }

  public pipe() {
    if (!this.current) return;
    const { width, gap, value } = this.current;
    const { val, sub, unit } = this.entity.props;
    const _width = val!(width) + unit;
    this.values = css`
      &:after {
        clear: both;
        content: '';
        display: block;
        height: 0;
      }

      > ${sub} {
        float: left;
        width: ${_width};
        margin-right: calc((100% - ${_width} * ${value}) / ${value - 1});
        margin-bottom: ${val!(gap) + unit};
        box-sizing: border-box;
      }

      > ${sub}:nth-child(${value}n) {
        margin-right: 0;
      }

      /* 4个一排 的情况 */
      > ${sub}:nth-child(${value}n + 1):nth-last-child(-n + ${value}),
      > ${sub}:nth-child(${value}n + 1):nth-last-child(-n + ${value}) ~ ${sub} {
        margin-bottom: 0;
      }
    `;
  }
}
