import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { color, background, width, height, opacity, size, margin, padding, top, right, bottom, left } =
    props;

  const values = css`
    ${color && 'color:' + color + ';'}
    ${background && 'background:' + background + ';'}
    ${height && 'height:' + height + ';'}
    ${width && 'width:' + width + ';'}
    ${margin && 'margin:' + margin + ';'}
    ${padding && 'padding:' + padding + ';'}
    ${top && 'top:' + top + ';'}
    ${right && 'right:' + right + ';'}
    ${bottom && 'bottom:' + bottom + ';'}
    ${left && 'left:' + left + ';'}
    ${size && 'width:' + size + '; height: ' + size + ';'}
    ${opacity && 'opacity:' + opacity + ';'}
  `;

  options.data = data.concat(values);
  return options;
};
