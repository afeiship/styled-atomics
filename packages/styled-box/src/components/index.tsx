import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import nxCompose from '@jswork/next-compose';
import { Props, PluginEntity } from './types';
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
    /**
     * Styled engine(eg: styled-component).
     */
    engine: PropTypes.any,
    /**
     * The distance unit.
     */
    unit: PropTypes.string,
    /**
     * Deault node name.
     */
    nodeName: PropTypes.any,
    /**
     * External plugin list.
     */
    plugins: PropTypes.array,
    /**
     * Plugin value.
     */
    plugin: PropTypes.string,
    /**
     * Plugin options.
     */
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
    const defaultEntity: PluginEntity = { props: this.props, data: [] };
    const options = fn(defaultEntity);
    const Styled = engine.styled(nodeName)`
      ${options.data.join('')}
    `;

    return <Styled className={classNames(CLASS_NAME, className)} {...props} />;
  }
}
