import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import nx from '@jswork/next';
import nxCompactObject from '@jswork/next-compact-object';
import positionValue from '@jswork/position-value';
import pixels from './pixels';
import { Props } from './types';

const CLASS_NAME = 'styled-box';

export default class StyledBox extends Component<Props> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    debug: PropTypes.string,
    unit: PropTypes.string,
    nodeName: PropTypes.any
  };

  static defaultProps = {
    unit: 'px',
    nodeName: 'div'
  };

  render() {
    const {
      // position
      t,
      r,
      b,
      l,
      trbl0,
      rel,
      abs,
      fixed,

      // size
      w,
      h,
      wh,
      w1,
      wp,

      // color
      c,
      bg,

      // margin + padding
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
      auto,

      // border-radius
      radius,
      round,
      circle,

      // basic
      debug,
      unit,
      className,
      nodeName,
      ...props
    } = this.props;

    const pxProps = px ? { paddingLeft: px, paddingRight: px } : null;
    const pyProps = py ? { paddingTop: py, paddingBottom: py } : null;
    const mxProps = mx ? { marginLeft: mx, marginRight: mx } : null;
    const myProps = my ? { marginTop: my, marginBottom: my } : null;
    const mAutoProps = auto ? { marginLeft: 'auto', marginRight: 'auto' } : null;
    const position = positionValue({ fixed, abs, rel });
    const trbl0Props = trbl0 ? { top: 0, right: 0, bottom: 0, left: 0 } : null;
    const debugProps = debug ? { border: `1px solid ${debug}` } : null;
    const whProps = wh ? { width: wh, height: wh } : null;
    const w1Props = w1 ? { width: (1 * 100) / w1 + '%' } : null;
    const wpProps = wp ? { width: (wp * 100) / 10 + '%' } : null;
    const roundProps = round ? { borderRadius: '10000px' } : null;
    const circleProps = circle ? { borderRadius: '50%' } : null;

    const computedBoxProps = nxCompactObject({
      position,
      width: w,
      height: h,
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
      ...debugProps,
      ...pxProps,
      ...pyProps,
      ...mxProps,
      ...myProps,
      ...mAutoProps,
      ...trbl0Props,
      ...whProps,
      ...w1Props,
      ...wpProps,
      ...roundProps,
      ...circleProps
    });

    nx.forIn(computedBoxProps, (key, value) => {
      if (pixels.includes(key)) {
        let computed = value;
        if (value) {
          if (typeof value === 'number') {
            computed = value + (unit as string);
          }
        }
        computedBoxProps[key] = value ? computed : value;
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
