import { css } from 'styled-components';

export default (options) => {
  const { props, data } = options;
  const { auto, maa, m0a, m0, mt0, mr0, mb0, ml0, mt_, mr_, mb_, ml_, sub, strip } = props;

  const values = css`
    ${auto && 'margin-left: auto; margin-right: auto;'}
    ${maa && 'margin: auto;'}
    ${m0a && 'margin: 0 auto;'}

    ${m0 && 'margin: 0;'}
    ${mt0 && 'margin-top: 0;'}
    ${mr0 && 'margin-right: 0;'}
    ${mb0 && 'margin-bottom: 0;'}
    ${ml0 && 'margin-left: 0;'}

    ${mt_ && strip && ' > ' + sub + ':first-child{ margin-right:0; }'}
    ${mr_ && strip && ' > ' + sub + ':last-child{ margin-right:0; }'}
    ${mb_ && strip && ' > ' + sub + ':last-child{ margin-bottom:0; }'}
    ${ml_ && strip && ' > ' + sub + ':first-child{ margin-left:0; }'}
  `;

  options.data = data.concat(values);
  return options;
};
