import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { val, p, pt, pr, pb, pl, px, py, p_, pt_, pr_, pb_, pl_, sub, unit, unitless } = props;
  const _unit = unitless ? '' : unit;
  const isExist = (v) => v in props;

  const values = css`
    ${isExist('p') && 'padding:' + val(p) + _unit + ';'}
    ${isExist('pt') && 'padding-top:' + val(pt) + _unit + ';'}
    ${isExist('pr') && 'padding-right:' + val(pr) + _unit + ';'}
    ${isExist('pb') && 'padding-bottop:' + val(pb) + _unit + ';'}
    ${isExist('pl') && 'padding-left:' + val(pl) + _unit + ';'}


    ${isExist('p_') && '> ' + sub + ' { padding: ' + val(p_) + _unit + '; }'}
    ${isExist('pt_') && '> ' + sub + ' { padding-top: ' + val(pt_) + _unit + '; }'}
    ${isExist('pr_') && '> ' + sub + ' { padding-right: ' + val(pr_) + _unit + '; }'}
    ${isExist('pb_') && '> ' + sub + ' { padding-bottom: ' + val(pb_) + _unit + '; }'}
    ${isExist('pl_') && '> ' + sub + ' { padding-left: ' + val(pl_) + _unit + '; }'}

    ${isExist('px') && 'padding-left:' + val(px) + _unit + '; padding-right:' + val(px) + _unit + ';'}
    ${isExist('py') && 'padding-top:' + val(py) + _unit + '; padding-bottom:' + val(py) + _unit + ';'}
  `;

  options.data = data.concat(values);
  return options;
};
