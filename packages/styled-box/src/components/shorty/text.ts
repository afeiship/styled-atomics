import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { tdn, tdu, tdlh, tl, tc, tr, tj, tlr_, nowrap, ell, b, n, usn } = props;

  const values = css`
    ${tdn && 'text-decoration: none;'}
    ${tdu && 'text-decoration: underline;'}
    ${tdlh && 'text-decoration: line-through;'}

    ${tl && 'text-align: left;'}
    ${tc && 'text-align: center;'}
    ${tr && 'text-align: right;'}
    ${tj && 'text-align: justify;'}
    ${tlr_ && '> *:first-child { text-align: left; } > *:last-child { text-align: right; }'}

    ${nowrap && 'white-space: nowrap;'}
    ${ell &&
    'white-space: nowrap; text-overflow: ellipsis; vertical-align: middle; overflow: hidden;'}
    ${b && 'font-weight: bold;'}
    ${n && 'font-weight: normal; font-style: normal;'}
    ${usn && 'user-select: none;'}
  `;

  options.data = data.concat(values);
  return options;
};
