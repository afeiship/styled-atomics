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
  bg?: string;
  m?: number;
  p?: number;
  f?: number;
  o?: number;
  lh?: number | string;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
  px?: number;
  py?: number;
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
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
  engine?: EngineProps;
  className?: string;
  debug?: string | boolean;
  unit?: string;
  nodeName?: any;
}
