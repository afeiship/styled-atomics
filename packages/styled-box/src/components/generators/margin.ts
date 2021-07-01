import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { val, m, mt, mr, mb, ml, mx, my, m_, mt_, mr_, mb_, ml_, sub, unit, unitless } = props;
  const _unit = unitless ? '' : unit;

  const values = css`
    ${m && 'margin:' + val(m) + _unit + ';'}
    ${mt && 'margin-top:' + val(mt) + _unit + ';'}
    ${mr && 'margin-right:' + val(mr) + _unit + ';'}
    ${mb && 'margin-bottom:' + val(mb) + _unit + ';'}
    ${ml && 'margin-left:' + val(ml) + _unit + ';'}

    ${m_ && '> ' + sub + ' { margin: ' + val(m_) + _unit + '; }'}
    ${mt_ && '> ' + sub + ' { margin-top: ' + val(mt_) + _unit + '; }'}
    ${mr_ && '> ' + sub + ' { margin-right: ' + val(mr_) + _unit + '; }'}
    ${mb_ && '> ' + sub + ' { margin-bottom: ' + val(mb_) + _unit + '; }'}
    ${ml_ && '> ' + sub + ' { margin-left: ' + val(ml_) + _unit + '; }'}

    ${mx && 'margin-left:' + val(mx) + _unit + '; margin-right:' + val(mx) + _unit + ';'}
    ${my && 'margin-top:' + val(my) + _unit + '; margin-bottom:' + val(my) + _unit + ';'}
  `;

  options.data = data.concat(values);
  return options;
};
