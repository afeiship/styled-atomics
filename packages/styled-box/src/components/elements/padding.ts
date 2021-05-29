import { css } from 'styled-components';

export default (options) => {
  const { props, data } = options;
  const { p, pt, pr, pb, pl, px, py, p_, pt_, pr_, pb_, pl_, strip, sub, unit } = props;

  const values = css`
    ${p && 'padding:' + p + unit + ';'}
    ${pt && 'padding-top:' + pt + unit + ';'}
    ${pr && 'padding-right:' + pr + unit + ';'}
    ${pb && 'padding-bottop:' + pb + unit + ';'}
    ${pl && 'padding-left:' + pl + unit + ';'}


    ${p_ && '> ' + sub + ' { padding: ' + p_ + unit + '}'}
    ${pt_ && '> ' + sub + ' { padding-top: ' + pt_ + unit + '}'}
    ${pr_ && '> ' + sub + ' { padding-right: ' + pr_ + unit + '}'}
    ${pb_ && '> ' + sub + ' { padding-bottom: ' + pb_ + unit + '}'}
    ${pl_ && '> ' + sub + ' { padding-left: ' + pl_ + unit + '}'}

    ${pt_ && strip && ' > ' + sub + ':first-child{ padding-top:0; }'}
    ${pr_ && strip && ' > ' + sub + ':last-child{ padding-right:0; }'}
    ${pb_ && strip && ' > ' + sub + ':last-child{ padding-bottom:0; }'}
    ${pl_ && strip && ' > ' + sub + ':first-child{ padding-left:0; }'}

    ${px && 'padding-left:' + px + unit + '; padding-right:' + px + unit + ';'}
    ${py && 'padding-top:' + py + unit + '; padding-bottom:' + py + unit + ';'}
  `;

  options.data = data.concat(values);
  return options;
};
