type FlexValue = 'la' | 'lar' | 'ar' | 'lr' | 'ta' | 'tab' | 'ab' | 'tb' | 'center';
type NumericLike = string | number;

interface Flexbox {
  value?: FlexValue;
  align?: string;
  wrap?: boolean;
  justify?: string;
}

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
  plugin?: string;
  options?: any;
  sub?: string | string[];
  strip?: boolean;
  x?: boolean;
  y?: boolean;
  h?: boolean;
  w?: boolean;
};

type GeneratorsProps = {
  bg?: string;
  bg_?: string;
  blank?: NumericLike;
  radius?: NumericLike;
  bdw?: NumericLike;
  bds?: string;
  bdc?: string;
  c?: string;
  c_?: string;
  flexbox?: Flexbox;
  fl?: boolean;
  fr?: boolean;
  fl_?: boolean;
  fr_?: boolean;
  f?: NumericLike;
  f_?: NumericLike;
  h?: NumericLike;
  hp?: NumericLike;
  h100?: boolean;
  lc?: NumericLike;

  m?: NumericLike;
  mt?: NumericLike;
  mr?: NumericLike;
  mb?: NumericLike;
  ml?: NumericLike;
  mx?: NumericLike;
  my?: NumericLike;
  m_?: NumericLike;
  mt_?: NumericLike;
  mr_?: NumericLike;
  mb_?: NumericLike;
  ml_?: NumericLike;

  p?: NumericLike;
  pt?: NumericLike;
  pr?: NumericLike;
  pb?: NumericLike;
  pl?: NumericLike;
  px?: NumericLike;
  py?: NumericLike;
  p_?: NumericLike;
  pt_?: NumericLike;
  pr_?: NumericLike;
  pb_?: NumericLike;
  pl_?: NumericLike;

  rel?: boolean;
  abs?: boolean;
  fixed?: boolean;
  sticky?: boolean;
  t?: NumericLike;
  r?: NumericLike;
  b?: NumericLike;
  l?: NumericLike;
  trbl0?: boolean;
  space?: NumericLike;
  wh?: NumericLike;
  w?: NumericLike;
  wp?: NumericLike;
  w1?: NumericLike;
  w100?: boolean;
  z?: boolean;
};

type PluginProps = {
  plugin?: string | any[];
  options?: any;
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
  deubg?: boolean | string;
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
