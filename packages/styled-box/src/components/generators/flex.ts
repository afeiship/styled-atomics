import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { flex, flex_, sub } = props;
  const value = Number(flex); // when flex is boolean: true

  const values = css`
    ${flex && 'flex:' + value + ';'}
    ${flex_ && '> ' + sub + ' { flex: ' + flex_ + '; }'}
  `;

  options.data = data.concat(values);
  return options;
};
