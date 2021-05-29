import { css } from 'styled-components';

export default (options) => {
  const { props, data } = options;
  const { m, mt, mr, mb, ml, mx, my, m_, mt_, mr_, mb_, ml_, strip, auto, sub, unit } = props;

  const values = css`
    ${m && 'margin:' + m + unit + ';'}
    ${mt && 'margin-top:' + mt + unit + ';'}
    ${mr && 'margin-right:' + mr + unit + ';'}
    ${mb && 'margin-bottom:' + mb + unit + ';'}
    ${ml && 'margin-left:' + ml + unit + ';'}

    ${m_ && '> ' + sub + ' { margin: ' + m_ + unit + '}'}
    ${mt_ && '> ' + sub + ' { margin-top: ' + mt_ + unit + '}'}
    ${mr_ && '> ' + sub + ' { margin-right: ' + mr_ + unit + '}'}
    ${mb_ && '> ' + sub + ' { margin-bottom: ' + mb_ + unit + '}'}
    ${ml_ && '> ' + sub + ' { margin-left: ' + ml_ + unit + '}'}

    ${m_ && strip && ' > ' + sub + ':first-child{ margin-top:0; }'}
    ${mr_ && strip && ' > ' + sub + ':last-child{ margin-right:0; }'}
    ${mb_ && strip && ' > ' + sub + ':last-child{ margin-bottom:0; }'}
    ${ml_ && strip && ' > ' + sub + ':first-child{ margin-left:0; }'}

    ${mx && 'margin-left:' + mx + unit + '; margin-right:' + mx + unit + ';'}
    ${my && 'margin-top:' + my + unit + '; margin-bottom:' + my + unit + ';'}
    ${auto && 'margin-left: auto; margin-right: auto;'}
  `;

  options.data = data.concat(values);
  return options;
};
