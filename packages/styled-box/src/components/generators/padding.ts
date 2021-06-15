import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { val, p, pt, pr, pb, pl, px, py, p_, pt_, pr_, pb_, pl_, sub, unit } = props;

  const values = css`
    ${p && 'padding:' + val(p) + unit + ';'}
    ${pt && 'padding-top:' + val(pt) + unit + ';'}
    ${pr && 'padding-right:' + val(pr) + unit + ';'}
    ${pb && 'padding-bottop:' + val(pb) + unit + ';'}
    ${pl && 'padding-left:' + val(pl) + unit + ';'}


    ${p_ && '> ' + sub + ' { padding: ' + val(p_) + unit + '; }'}
    ${pt_ && '> ' + sub + ' { padding-top: ' + val(pt_) + unit + '; }'}
    ${pr_ && '> ' + sub + ' { padding-right: ' + val(pr_) + unit + '; }'}
    ${pb_ && '> ' + sub + ' { padding-bottom: ' + val(pb_) + unit + '; }'}
    ${pl_ && '> ' + sub + ' { padding-left: ' + val(pl_) + unit + '; }'}

    ${px && 'padding-left:' + val(px) + unit + '; padding-right:' + val(px) + unit + ';'}
    ${py && 'padding-top:' + val(py) + unit + '; padding-bottom:' + val(py) + unit + ';'}
  `;

  options.data = data.concat(values);
  return options;
};
