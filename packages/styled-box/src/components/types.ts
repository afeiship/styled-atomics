type FlexValue = 'la' | 'lar' | 'ar' | 'lr' | 'ta' | 'tab' | 'ab' | 'tb' | 'center';
type FlexAlignment = 'stretch' | 'center' | 'start' | 'end' | 'between' | 'around' | 'baseline' | 'initial' | 'inherit';

export interface Flexbox {
  value?: FlexValue;
  align?: FlexAlignment;
  wrap?: boolean;
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

export interface Props {
  t?: number;
  r?: number;
  b?: number;
  l?: number;
  fl?: boolean;
  fr?: boolean;
  fl_?: boolean;
  fr_?: boolean;
  bdw?: number;
  bds?: string;
  bdc?: string;
  clearfix?: boolean;
  trbl0?: boolean;
  rel?: boolean;
  abs?: boolean;
  fixed?: boolean;
  w?: number;
  h?: number;
  hp?: number;
  wh?: number;
  w1?: number;
  wp?: number;
  c?: string;
  c_?: string;
  bg?: string;
  bg_?: string;
  m?: number;
  m_?: number;
  p?: number;
  p_?: number;
  f?: number;
  o?: number;
  lh?: number | string;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
  pt_?: number;
  pr_?: number;
  pb_?: number;
  pl_?: number;
  px?: number;
  py?: number;
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
  mt_?: number;
  mr_?: number;
  mb_?: number;
  ml_?: number;
  mx?: number;
  my?: number;
  x?: boolean;
  y?: boolean;
  strip?: boolean;
  space?: number;
  blank?: number;
  lc?: number;
  auto?: boolean;
  radius?: number | string;
  round?: boolean;
  circle?: boolean;
  flexbox?: Flexbox;
  plugins?: any[];
  plugin?: any;
  option?: any;
  sub?: string;
  engine?: EngineProps;
  className?: string;
  debug?: string | boolean;
  unit?: string;
  nodeName?: any;
}
