import { css } from 'styled-components';

export default (options) => {
  const { props, data } = options;
  const { p, pt, pr, pb, pl, px, py, p_, pt_, pr_, pb_, pl_, pt__, pr__, pb__, pl__, sub, unit } = props;

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

    ${pt__ && ' > ' + sub + ':first-child{ padding-top:0; }'}
    ${pr__ && ' > ' + sub + ':last-child{ padding-right:0; }'}
    ${pb__ && ' > ' + sub + ':last-child{ padding-bottom:0; }'}
    ${pl__ && ' > ' + sub + ':first-child{ padding-left:0; }'}

    ${px && 'padding-left:' + px + unit + '; padding-right:' + px + unit + ';'}
    ${py && 'padding-top:' + py + unit + '; padding-bottom:' + py + unit + ';'}
  `;

  options.data = data.concat(values);
  return options;
};
