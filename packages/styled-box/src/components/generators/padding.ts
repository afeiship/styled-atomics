import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { val, p, pt, pr, pb, pl, px, py, p_, pt_, pr_, pb_, pl_, sub, unit, unitless } = props;
  const _unit = unitless ? '' : unit;

  const values = css`
    ${p && 'padding:' + val(p) + _unit + ';'}
    ${pt && 'padding-top:' + val(pt) + _unit + ';'}
    ${pr && 'padding-right:' + val(pr) + _unit + ';'}
    ${pb && 'padding-bottop:' + val(pb) + _unit + ';'}
    ${pl && 'padding-left:' + val(pl) + _unit + ';'}


    ${p_ && '> ' + sub + ' { padding: ' + val(p_) + _unit + '; }'}
    ${pt_ && '> ' + sub + ' { padding-top: ' + val(pt_) + _unit + '; }'}
    ${pr_ && '> ' + sub + ' { padding-right: ' + val(pr_) + _unit + '; }'}
    ${pb_ && '> ' + sub + ' { padding-bottom: ' + val(pb_) + _unit + '; }'}
    ${pl_ && '> ' + sub + ' { padding-left: ' + val(pl_) + _unit + '; }'}

    ${px && 'padding-left:' + val(px) + _unit + '; padding-right:' + val(px) + _unit + ';'}
    ${py && 'padding-top:' + val(py) + _unit + '; padding-bottom:' + val(py) + _unit + ';'}
  `;

  options.data = data.concat(values);
  return options;
};
