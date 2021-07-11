import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { flex, flg, fls, flb, flex_, sub } = props;
  const value = Number(flex); // when flex is boolean: true

  const values = css`
    ${flex && 'flex:' + value + ';'}
    ${flg && 'flex-grow:' + value + ';'}
    ${fls && 'flex-shrink:' + value + ';'}
    ${flb && 'flex-basis:' + value + ';'}
    ${flex_ && '> ' + sub + ' { flex: ' + flex_ + '; }'}
  `;

  options.data = data.concat(values);
  return options;
};
