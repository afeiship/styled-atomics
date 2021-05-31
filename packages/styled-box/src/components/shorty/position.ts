import positionValue from '@jswork/position-value';

export default (options) => {
  const { props, data } = options;
  const {
    rel,
    abs,
    fixed,
    sticky,
    t0,
    r0,
    b0,
    l0,
    lr0,
    tb0,
    tr0,
    rb0,
    bl0,
    trbl0,
    lt5,
    t375,
    t125,
    t50,
    r50,
    b50,
    l50,
    t100,
    r100,
    b100,
    l100
  } = props;
  const position = positionValue({ rel, abs, fixed, sticky });
  const values = props.engine.css`
    ${position && 'position:' + position + ';'}
    ${t0 && 'top: 0;'}
    ${r0 && 'right: 0;'}
    ${b0 && 'bottom: 0;'}
    ${l0 && 'left: 0;'}
    ${lr0 && 'left: 0; right: 0;'}
    ${tb0 && 'top: 0; bottom: 0;'}
    ${tr0 && 'top: 0; right: 0;'}
    ${rb0 && 'right: 0; bottom: 0;'}
    ${bl0 && 'bottom: 0; left: 0;'}
    ${trbl0 && 'top: 0; right: 0; bottom: 0; left: 0;'}
    ${lt5 && 'left: 50%; top: 50%;'}
    ${t375 && 'top: 37.5%;'}
    ${t125 && 'top: 12.5%;'}
    ${t50 && 'top: 50%;'}
    ${r50 && 'right: 50%;'}
    ${b50 && 'bottom: 50%;'}
    ${l50 && 'left: 50%;'}
    ${t100 && 'top: 100%;'}
    ${r100 && 'right: 100%;'}
    ${b100 && 'bottom: 100%;'}
    ${l100 && 'left: 100%;'}
  `;

  options.data = data.concat(values);
  return options;
};
