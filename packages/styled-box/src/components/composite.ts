import margin from './elements/margin';
import padding from './elements/padding';
import position from './elements/position';
import flexbox from './elements/flexbox';
import fontSize from './elements/font-size';
import background from './elements/background';
import color from './elements/color';
import borderRadius from './elements/border-radius';
import width from './elements/width';
import height from './elements/height';
import wh from './elements/wh';
import space from './elements/space';
import blank from './elements/blank';
import lc from './elements/line-clamp';
import float from './elements/float';
import border from './elements/border';

// shory
import shorty from './shorty';

// modules
import plugins from './plugins';

export default [
  margin,
  padding,
  position,
  flexbox,
  fontSize,
  color,
  background,
  borderRadius,
  width,
  height,
  wh,
  space,
  blank,
  lc,
  float,
  border,

  // shorty
  ...shorty,
  ...plugins
];
