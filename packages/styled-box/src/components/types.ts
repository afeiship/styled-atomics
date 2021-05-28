type FlexValue = 'la' | 'lar' | 'ar' | 'lr' | 'ta' | 'tab' | 'ab' | 'tb' | 'center';
type FlexAlignment =
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'between'
  | 'around'
  | 'baseline'
  | 'initial'
  | 'inherit';

export interface Flexbox {
  value?: FlexValue;
  align?: FlexAlignment;
  wrap?: boolean;
}

export interface Props {
  t?: number;
  r?: number;
  b?: number;
  l?: number;
  trbl0?: boolean;
  relative?: boolean;
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
  auto?: boolean;
  radius?: number | string;
  round?: boolean;
  circle?: boolean;
  flexbox?: Flexbox;
  plugin?: any;
  option?: any;
  className?: string;
  debug?: string | boolean;
  unit?: string;
  nodeName?: any;
}
