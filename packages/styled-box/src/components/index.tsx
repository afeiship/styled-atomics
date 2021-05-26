import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import nx from '@jswork/next';
import nxCompactObject from '@jswork/next-compact-object';

interface Props {
  t?: number;
  r?: number;
  b?: number;
  l?: number;
  rel?: boolean;
  abs?: boolean;
  fixed?: boolean;
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
  radius: number | string;
  className?: string;
  unit?: string;
  nodeName?: any;
}

const rpxUnits = [
  'margin',
  'padding',
  'fontSize',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft'
];

const CLASS_NAME = 'styled-box';

export default class StyledBox extends Component<Props> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    unit: PropTypes.string,
    nodeName: PropTypes.any
  };

  static defaultProps = {
    unit: 'px',
    nodeName: 'div'
  };

  render() {
    const {
      t,
      r,
      b,
      l,
      rel,
      abs,
      fixed,
      c,
      bg,
      m,
      p,
      f,
      o,
      lh,
      pt,
      pr,
      pb,
      pl,
      px,
      py,
      mt,
      mr,
      mb,
      ml,
      mx,
      my,
      radius,
      unit,
      className,
      nodeName,
      ...props
    } = this.props;

    const pxProps = px ? { paddingLeft: px, paddingRight: px } : {};
    const pyProps = py ? { paddingTop: py, paddingBottom: py } : {};
    const mxProps = mx ? { marginLeft: mx, marginRight: mx } : {};
    const myProps = my ? { marginTop: my, marginBottom: my } : {};

    let position: string | boolean = 'static';
    position = fixed ?? 'fixed';
    position = abs ?? 'absolute';
    position = rel ?? 'relative';

    const computedBoxProps = nxCompactObject({
      position,
      color: c,
      background: bg,
      padding: p,
      margin: m,
      opacity: o,
      fontSize: f,
      borderRadius: radius,
      lineHeight: lh,
      paddingTop: pt,
      paddingRight: pr,
      paddingBottom: pb,
      paddingLeft: pl,
      marginTop: mt,
      marginRight: mr,
      marginBottom: mb,
      marginLeft: ml,
      ...pxProps,
      ...pyProps,
      ...mxProps,
      ...myProps
    });

    nx.forIn(computedBoxProps, (key, value) => {
      if (rpxUnits.includes(key)) {
        computedBoxProps[key] = value ? value + unit : value;
      }
    });

    const Container = styled(nodeName)(computedBoxProps);

    return (
      <Container
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}
      />
    );
  }
}
