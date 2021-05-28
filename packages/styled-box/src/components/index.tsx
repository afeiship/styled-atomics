import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
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
    engine: PropTypes.any,
    unit: PropTypes.string,
    nodeName: PropTypes.any,
    plugins: PropTypes.array,
    plugin: PropTypes.string,
    options: PropTypes.any
  };

  static defaultProps = {
    engine: null,
    unit: 'px',
    nodeName: 'div',
    plugins: []
  };

  render() {
    const { className, nodeName, engine, plugins, ...props } = this.props;
    const fn = nxCompose.apply(null, modules.concat(plugins as Array<any>));
    const options = fn({ props: this.props, data: [] });
    const Styled = engine.styled(nodeName)`
      ${options.data.join('')}
    `;

    return <Styled className={classNames(CLASS_NAME, className)} {...props} />;
  }
}
