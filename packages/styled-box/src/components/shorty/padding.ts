export default (options) => {
  const { props, data } = options;
  const { p0, pt0, pr0, pb0, pl0, pt_, pr_, pb_, pl_, sub, strip } = props;

  const values = props.engine.css`
    ${p0 && 'padding:0;'}
    ${pt0 && 'padding-top:0;'}
    ${pr0 && 'padding-right:0;'}
    ${pb0 && 'padding-bottom:0;'}
    ${pl0 && 'padding-left:0;'}

    ${pt_ && strip && ' > ' + sub + ':first-child{ padding-top:0; }'}
    ${pr_ && strip && ' > ' + sub + ':last-child{ padding-right:0; }'}
    ${pb_ && strip && ' > ' + sub + ':last-child{ padding-bottom:0; }'}
    ${pl_ && strip && ' > ' + sub + ':first-child{ padding-left:0; }'}
  `;

  options.data = data.concat(values);
  return options;
};
