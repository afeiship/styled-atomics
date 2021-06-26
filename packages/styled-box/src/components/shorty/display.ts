import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { db, di, dib, dtbc, dtb, dflex, diflex, dgrid, dn, db_, di_, dib_, dtbc_, sub } = props;

  const values = css`
    ${db && 'display: block;'}
    ${di && 'display: inline;'}
    ${dib && 'display: inline-block;'}
    ${dtbc && 'display: table-cell;'}
    ${dtb && 'display: table;'}
    ${dflex && 'display: flex;'}
    ${diflex && 'display: inline-flex;'}
    ${dgrid && 'display: grid;'}
    ${dn && 'display: none;'}

    ${db_ && '> ' + sub + ' { display: block; }'}
    ${di_ && '> ' + sub + ' { display: inline; }'}
    ${dib_ && '> ' + sub + ' { display: inline-block; }'}
    ${dtbc_ && '> ' + sub + ' { display: table-cell; }'}
  `;

  options.data = data.concat(values);
  return options;
};
