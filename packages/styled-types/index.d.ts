type FlexValue = 'la' | 'lar' | 'ar' | 'lr' | 'ta' | 'tab' | 'ab' | 'tb' | 'center';
type Numeric = string | number;

interface Flexbox {
  value?: FlexValue;
  align?: string;
  wrap?: boolean;
  justify?: string;
}

interface InlinePluiginName {
  name: string;
}

export type InlinePlugin = Record<string, any> & InlinePluiginName;

export interface Plugin {
  (entity: PluginEntity): PluginEntity;
}

export interface PluginEntity {
  props: Props;
  data: any[];
}

// generators
type BasicProps = {
  styled?: any;
  className?: string;
  staticStyled?: boolean;
  deps?: any;
  unit?: string;
  as?: any;
  plugins?: any[];
  sub?: string | string[];
  strip?: boolean;
  unitless?: boolean;
  value?: boolean | Numeric;
  val?: (val: any) => string;
  x?: boolean | Numeric;
  y?: boolean | Numeric;
  h?: boolean | Numeric;
  w?: boolean | Numeric;
};

type GeneratorsProps = {
  bg?: string;
  bg_?: string;
  blank?: Numeric;
  radius?: Numeric;
  bdw?: Numeric;
  bds?: string;
  bdc?: string;
  c?: string;
  c_?: string;
  flexbox?: Flexbox;
  f?: Numeric;
  f_?: Numeric;
  h?: Numeric;
  hp?: Numeric;
  lc?: Numeric;
  lh?: Numeric;
  hlh?: Numeric;
  flex?: Numeric | boolean;
  flex_?: Numeric;
  deubg?: boolean | string;

  // raw
  color?: string;
  cursor?: string;
  background?: string;
  width?: string;
  height?: string;
  opacity?: string;
  size?: string;
  margin?: string;
  padding?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;

  m?: Numeric;
  mt?: Numeric;
  mr?: Numeric;
  mb?: Numeric;
  ml?: Numeric;
  mx?: Numeric;
  my?: Numeric;
  m_?: Numeric;
  mt_?: Numeric;
  mr_?: Numeric;
  mb_?: Numeric;
  ml_?: Numeric;
  o?: Numeric;

  ov?: string;
  ovx?: string;
  ovy?: string;

  p?: Numeric;
  pt?: Numeric;
  pr?: Numeric;
  pb?: Numeric;
  pl?: Numeric;
  px?: Numeric;
  py?: Numeric;
  p_?: Numeric;
  pt_?: Numeric;
  pr_?: Numeric;
  pb_?: Numeric;
  pl_?: Numeric;

  t?: Numeric;
  r?: Numeric;
  b?: Numeric;
  l?: Numeric;
  trbl?: Numeric;
  space?: Numeric;
  wh?: Numeric;
  wp?: Numeric;
  w1?: Numeric;
  z?: Numeric;
};

type PluginProps = {
  plugin?: string | InlinePlugin | InlinePlugin[];
};

type ShortyProps = {
  vat?: boolean;
  vab?: boolean;
  vam?: boolean;
  vabs?: boolean;
  vat_?: boolean;
  vab_?: boolean;
  vam_?: boolean;
  vabs_?: boolean;

  bgn?: boolean;
  bdn?: boolean;
  bsb?: boolean;
  bsc?: boolean;

  bgdn?: boolean;
  wh100?: boolean;
  clearfix?: boolean;
  cd?: boolean;
  cm?: boolean;
  cp?: boolean;
  pn?: boolean;
  fl?: boolean;
  fr?: boolean;
  fl_?: boolean;
  fr_?: boolean;

  db?: boolean;
  di?: boolean;
  dib?: boolean;
  dtbc?: boolean;
  dtb?: boolean;
  dflex?: boolean;
  diflex?: boolean;
  dgrid?: boolean;
  dn?: boolean;
  db_?: boolean;
  di_?: boolean;
  dib_?: boolean;
  dtbc_?: boolean;

  // flex
  wrap?: boolean;
  align?: string;
  justify?: string;
  row?: boolean;
  column?: boolean;

  f0?: boolean;
  v100?: boolean;
  h100?: boolean;
  min100?: boolean;
  max100?: boolean;
  auto?: boolean;
  maa?: boolean;
  m0a?: boolean;
  m0?: boolean;
  mt0?: boolean;
  mr0?: boolean;
  mb0?: boolean;
  ml0?: boolean;
  ovh?: boolean;
  ovs?: boolean;
  ova?: boolean;
  p0?: boolean;
  pt0?: boolean;
  pr0?: boolean;
  pb0?: boolean;
  pl0?: boolean;
  relative?: boolean;
  abs?: boolean;
  fixed?: boolean;
  sticky?: boolean;
  t0?: boolean;
  r0?: boolean;
  b0?: boolean;
  l0?: boolean;
  lr0?: boolean;
  tb0?: boolean;
  tr0?: boolean;
  rb0?: boolean;
  bl0?: boolean;
  trbl0?: boolean;
  lt5?: boolean;
  t375?: boolean;
  t125?: boolean;
  t50?: boolean;
  r50?: boolean;
  b50?: boolean;
  l50?: boolean;
  t100?: boolean;
  r100?: boolean;
  b100?: boolean;
  l100?: boolean;
  smooth?: boolean;
  circle?: boolean;
  round?: boolean;
  rect?: boolean;
  disabled?: boolean;
  hidden?: boolean;
  tdn?: boolean;
  tdu?: boolean;
  tdlh?: boolean;
  tl?: boolean;
  tc?: boolean;
  tr?: boolean;
  tj?: boolean;
  tlr_?: boolean;
  ell?: boolean;
  wsn?: boolean;
  wsnw?: boolean;
  fwb?: boolean;
  fsn?: boolean;
  usn?: boolean;
  tsy5?: boolean;
  tsx5?: boolean;
  tsxy5?: boolean;
};

type ExtensionProps = {
  [key: string]: any;
};

export type Props = React.HTMLProps<Element> &
  React.HTMLProps<HTMLFormElement> &
  React.HTMLProps<HTMLImageElement> &
  BasicProps &
  GeneratorsProps &
  PluginProps &
  ShortyProps &
  ExtensionProps;
