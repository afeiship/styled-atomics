import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import nxCompose from '@jswork/next-compose';
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
    unit: PropTypes.string,
    nodeName: PropTypes.any,
    plugins: PropTypes.array,
    plugin: PropTypes.string,
    options: PropTypes.any
  };

  static defaultProps = {
    unit: 'px',
    nodeName: 'div',
    plugins: []
  };

  render() {
    const { className, nodeName, ...props } = this.props;
    const fn = nxCompose.apply(null, modules);
    const options = fn({ props: this.props, data: [] });
    const Styled = styled(nodeName)`
      ${options.data.join('')}
    `;

    return <Styled className={classNames(CLASS_NAME, className)} {...props} />;
  }
}
