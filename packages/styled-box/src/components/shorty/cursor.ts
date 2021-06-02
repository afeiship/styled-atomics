import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { cd, cm, cp, pn } = props;

  const values = css`
    ${cd && 'cursor: default;'}
    ${cp && 'cursor: pointer;'}
    ${cm && 'cursor: move;'}
    ${pn && 'pointer-events: none;'}
  `;

  options.data = data.concat(values);
  return options;
};
