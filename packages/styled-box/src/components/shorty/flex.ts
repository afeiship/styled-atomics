import css from '@jswork/styled-css';

const ATTRS_SHORTY = {
  s: 'flex-start',
  e: 'flex-end',
  sa: 'space-around',
  sb: 'space-between',

  start: 'flex-start',
  end: 'flex-end',
  around: 'space-around',
  between: 'space-between'
};

export default (options) => {
  const { props, data } = options;
  const { wrap, align, justify, row, column } = props;

  const values = css`
    ${wrap === true && 'flex-wrap: wrap'}
    ${wrap === false && 'flex-wrap: nowrap'}

    ${row && 'flex-direction: row; '}
    ${column && 'flex-direction: column; '}

    /* align */
    ${align && 'align-items:' + (ATTRS_SHORTY[align] || align) + ';'}
    /* justify */
    ${justify && 'justify-content:' + (ATTRS_SHORTY[justify] || justify) + ';'}
  `;

  options.data = data.concat(values);
  return options;
};
