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

export interface EngineProps {
  styled: any;
  css: any;
}

export interface Plugin {
  (entity: PluginEntity): PluginEntity;
}

export interface PluginEntity {
  props: Props;
  data: any[];
}

// generators
type BasicProps = {
  engine: EngineProps;
  className?: string;
  unit?: string;
  nodeName?: any;
  plugins?: any[];
  sub?: string | string[];
  strip?: boolean;
  x?: boolean;
  y?: boolean;
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
  fl?: boolean;
  fr?: boolean;
  fl_?: boolean;
  fr_?: boolean;
  f?: Numeric;
  f_?: Numeric;
  h?: Numeric;
  hp?: Numeric;
  h100?: boolean;
  lc?: Numeric;
  lh?: Numeric;
  hlh?: Numeric;

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

  rel?: boolean;
  abs?: boolean;
  fixed?: boolean;
  sticky?: boolean;
  t?: Numeric;
  r?: Numeric;
  b?: Numeric;
  l?: Numeric;
  trbl0?: boolean;
  space?: Numeric;
  wh?: Numeric;
  wp?: Numeric;
  w1?: Numeric;
  w100?: boolean;
  z?: boolean;
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
  debug?: boolean | string;
  db?: boolean;
  di?: boolean;
  dib?: boolean;
  dtbc?: boolean;
  dtb?: boolean;
  dflex?: boolean;
  dn?: boolean;
  db_?: boolean;
  di_?: boolean;
  dib_?: boolean;
  dtbc_?: boolean;

  f0?: boolean;
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
  nowrap?: boolean;
  ell?: boolean;
  b?: boolean;
  n?: boolean;
  usn?: boolean;
  tsy5?: boolean;
  tsx5?: boolean;
  tsxy5?: boolean;
};

export type Props = BasicProps & GeneratorsProps & PluginProps & ShortyProps;
