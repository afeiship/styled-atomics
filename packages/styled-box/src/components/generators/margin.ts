import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { val, m, mt, mr, mb, ml, mx, my, m_, mt_, mr_, mb_, ml_, sub, unit, unitless } = props;
  const _unit = unitless ? '' : unit;
  const isExist = (v) => v in props;

  const values = css`
    ${isExist('m') && 'margin:' + val(m) + _unit + ';'}
    ${isExist('mt') && 'margin-top:' + val(mt) + _unit + ';'}
    ${isExist('mr') && 'margin-right:' + val(mr) + _unit + ';'}
    ${isExist('mb') && 'margin-bottom:' + val(mb) + _unit + ';'}
    ${isExist('ml') && 'margin-left:' + val(ml) + _unit + ';'}

    ${isExist('m_') && '> ' + sub + ' { margin: ' + val(m_) + _unit + '; }'}
    ${isExist('mt_') && '> ' + sub + ' { margin-top: ' + val(mt_) + _unit + '; }'}
    ${isExist('mr_') && '> ' + sub + ' { margin-right: ' + val(mr_) + _unit + '; }'}
    ${isExist('mb_') && '> ' + sub + ' { margin-bottom: ' + val(mb_) + _unit + '; }'}
    ${isExist('ml_') && '> ' + sub + ' { margin-left: ' + val(ml_) + _unit + '; }'}

    ${isExist('mx') && 'margin-left:' + val(mx) + _unit + '; margin-right:' + val(mx) + _unit + ';'}
    ${isExist('my') && 'margin-top:' + val(my) + _unit + '; margin-bottom:' + val(my) + _unit + ';'}
  `;

  options.data = data.concat(values);
  return options;
};
