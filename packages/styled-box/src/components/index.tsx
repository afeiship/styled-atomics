import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import nxCompose from '@jswork/next-compose';
import positionValue from '@jswork/position-value';
import { Props } from './types';
import modules from './composite';

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
    const { className, nodeName, ...props } = this.props;
    const fn = nxCompose.apply(null, modules);
    const options = fn({ props: this.props, data: [] });

    const Container = styled(nodeName)`
      ${options.data.join('')}
    `;

    return <Container className={classNames(CLASS_NAME, className)} {...props} />;
  }
}
