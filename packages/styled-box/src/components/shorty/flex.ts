import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { wrap, align, justify, row, column } = props;

  const values = css`
    ${wrap === true && 'flex-wrap: wrap'}
    ${wrap === false && 'flex-wrap: nowrap'}

    ${row && 'flex-direction: row; '}
    ${column && 'flex-direction: column; '}

    /* align */
    ${align && 'align-items:' + align + ';'}
    /* justify */
    ${justify && 'justify-content:' + justify + ';'}
  `;

  options.data = data.concat(values);
  return options;
};
