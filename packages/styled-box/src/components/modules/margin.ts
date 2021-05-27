import { css } from 'styled-components';

export default (options) => {
  const { props, data } = options;
  const { m, mt, mr, mb, ml, mx, my, auto, unit } = props;

  const values = css`
    ${m && 'margin:' + m + unit + ';'}
    ${mt && 'margin-top:' + mt + unit + ';'}
    ${mr && 'margin-right:' + mr + unit + ';'}
    ${mb && 'margin-bottom:' + mb + unit + ';'}
    ${ml && 'margin-left:' + ml + unit + ';'}
    ${mx && 'margin-left:' + mx + unit + '; margin-right:' + mx + unit + ';'}
    ${my && 'margin-top:' + my + unit + '; margin-bottom:' + my + unit + ';'}
    ${auto && 'margin-left: auto; margin-right: auto;'}
  ` as Array<string>;

  options.data = [].concat(data, values);
  return options;
};
