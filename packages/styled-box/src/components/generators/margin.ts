import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { val, m, mt, mr, mb, ml, mx, my, m_, mt_, mr_, mb_, ml_, sub, unit } = props;

  const values = css`
    ${m && 'margin:' + val(m) + unit + ';'}
    ${mt && 'margin-top:' + val(mt) + unit + ';'}
    ${mr && 'margin-right:' + val(mr) + unit + ';'}
    ${mb && 'margin-bottom:' + val(mb) + unit + ';'}
    ${ml && 'margin-left:' + val(ml) + unit + ';'}

    ${m_ && '> ' + sub + ' { margin: ' + val(m_) + unit + '; }'}
    ${mt_ && '> ' + sub + ' { margin-top: ' + val(mt_) + unit + '; }'}
    ${mr_ && '> ' + sub + ' { margin-right: ' + val(mr_) + unit + '; }'}
    ${mb_ && '> ' + sub + ' { margin-bottom: ' + val(mb_) + unit + '; }'}
    ${ml_ && '> ' + sub + ' { margin-left: ' + val(ml_) + unit + '; }'}

    ${mx && 'margin-left:' + mx + unit + '; margin-right:' + val(mx) + unit + ';'}
    ${my && 'margin-top:' + my + unit + '; margin-bottom:' + val(my) + unit + ';'}
  `;

  options.data = data.concat(values);
  return options;
};
