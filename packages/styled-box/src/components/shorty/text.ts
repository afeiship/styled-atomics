import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { tdn, tdu, tdlh, tl, tc, tr, tj, tlr_, ell, fwb, fsn, usn } = props;

  const values = css`
    ${tdn && 'text-decoration: none;'}
    ${tdu && 'text-decoration: underline;'}
    ${tdlh && 'text-decoration: line-through;'}

    ${tl && 'text-align: left;'}
    ${tc && 'text-align: center;'}
    ${tr && 'text-align: right;'}
    ${tj && 'text-align: justify;'}
    ${tlr_ && '> *:first-child { text-align: left; } > *:last-child { text-align: right; }'}

    ${ell && 'white-space: nowrap; text-overflow: ellipsis; vertical-align: middle; overflow: hidden;'}
    ${fwb && 'font-weight: bold;'}
    ${fsn && 'font-weight: normal; font-style: normal;'}
    ${usn && 'user-select: none;'}
  `;

  options.data = data.concat(values);
  return options;
};
