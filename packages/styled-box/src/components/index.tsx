import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import nx from '@jswork/next';
import nxCompactObject from '@jswork/next-compact-object';

interface Props {
  c?: string;
  bg?: string;
  m?: number;
  p?: number;
  r?: number;
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
      c,
      bg,
      m,
      p,
      r,
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
      unit,
      className,
      nodeName,
      ...props
    } = this.props;
    const pxProps = px ? { paddingLeft: px, paddingRight: px } : {};
    const pyProps = py ? { paddingTop: py, paddingBottom: py } : {};
    const mxProps = mx ? { marginLeft: mx, marginRight: mx } : {};
    const myProps = my ? { marginTop: my, marginBottom: my } : {};

    const computedBoxProps = nxCompactObject({
      color: c,
      background: bg,
      padding: p,
      margin: m,
      opacity: o,
      fontSize: f,
      borderRadius: r,
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

    console.log('computedBoxProps:', computedBoxProps);

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
