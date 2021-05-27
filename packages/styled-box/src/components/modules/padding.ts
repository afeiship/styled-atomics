import { css } from 'styled-components';

export default (options) => {
  const { props, data } = options;
  const { p, pt, pr, pb, pl, px, py, unit } = props;

  const values = css`
    ${p && 'padding:' + p + unit + ';'}
    ${pt && 'padding-top:' + pt + unit + ';'}
    ${pr && 'padding-right:' + pr + unit + ';'}
    ${pb && 'padding-bottop:' + pb + unit + ';'}
    ${pl && 'padding-left:' + pl + unit + ';'}
    ${px && 'padding-left:' + px + unit + '; padding-right:' + px + unit + ';'}
    ${py && 'padding-top:' + py + unit + '; padding-bottop:' + py + unit + ';'}
  `;

  options.data = [].concat(data, values);
  return options;
};
