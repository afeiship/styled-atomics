export default (options) => {
  const { props, data } = options;
  const { p, pt, pr, pb, pl, px, py, p_, pt_, pr_, pb_, pl_, sub, unit } = props;

  const values = props.engine.css`
    ${p && 'padding:' + p + unit + ';'}
    ${pt && 'padding-top:' + pt + unit + ';'}
    ${pr && 'padding-right:' + pr + unit + ';'}
    ${pb && 'padding-bottop:' + pb + unit + ';'}
    ${pl && 'padding-left:' + pl + unit + ';'}


    ${p_ && '> ' + sub + ' { padding: ' + p_ + unit + '; }'}
    ${pt_ && '> ' + sub + ' { padding-top: ' + pt_ + unit + '; }'}
    ${pr_ && '> ' + sub + ' { padding-right: ' + pr_ + unit + '; }'}
    ${pb_ && '> ' + sub + ' { padding-bottom: ' + pb_ + unit + '; }'}
    ${pl_ && '> ' + sub + ' { padding-left: ' + pl_ + unit + '; }'}

    ${px && 'padding-left:' + px + unit + '; padding-right:' + px + unit + ';'}
    ${py && 'padding-top:' + py + unit + '; padding-bottom:' + py + unit + ';'}
  `;

  options.data = data.concat(values);
  return options;
};
