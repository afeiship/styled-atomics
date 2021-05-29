import { css } from 'styled-components';

export default (options) => {
  const { props, data } = options;
  const { vat, vab, vam, vabs, vat_, vab_, vam_, vabs_, sub } = props;

  const values = css`
    ${vat && 'vertical-align: top;'}
    ${vat_ && '> ' + sub + ' { vertical-align: top; }'}

    ${vab && 'vertical-align: bottom;'}
    ${vab_ && '> ' + sub + ' { vertical-align: bottom; }'}

    ${vam && 'vertical-align: middle;'}
    ${vam_ && '> ' + sub + ' { vertical-align: middle; }'}

    ${vabs && 'vertical-align: baseline;'}
    ${vabs_ && '> ' + sub + ' { vertical-align: baseline; }'}
  `;

  options.data = data.concat(values);
  return options;
};
