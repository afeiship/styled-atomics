import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import nxCompose from '@jswork/next-compose';
import filterReactProps from '@jswork/filter-react-props';
import { Props, PluginEntity } from './types';
import atomics from './composite';
import plugins from './plugins';
import pluginComposeEntity from '@jswork/plugin-compose-entity';

const CLASS_NAME = 'styled-box';
const FILTERED_PROPS = ['rel', 'x', 'y'];

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
    styled: PropTypes.any.isRequired,
    /**
     * The distance unit.
     */
    unit: PropTypes.string,
    /**
     * Deault node name.
     */
    as: PropTypes.any,
    /**
     * External plugin list.
     */
    plugins: PropTypes.array,
    /**
     * Plugin value.
     */
    plugin: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
    /**
     * Plugin options.
     */
    options: PropTypes.any
  };

  static mergePlugin(inPlugins) {
    const props = this.defaultProps;
    const plugins = props.plugins;
    const names = plugins.map((plugin) => plugin.prototype.name);
    inPlugins.forEach((plugin) => {
      const name = plugin.prototype.name;
      if (!names.includes(name)) {
        plugins.push(plugin);
      }
    });
    this.defaultProps.plugins = plugins;
  }

  static defaultProps = {
    sub: '*',
    unit: 'px',
    as: 'div',
    plugins: plugins
  };

  render() {
    const { className, as, styled, plugins, ...props } = this.props;
    const fn = nxCompose.apply(null, atomics.concat(pluginComposeEntity));
    const defaultEntity: PluginEntity = { props: this.props, data: [] };
    const options = fn(defaultEntity);
    const styles = options.data.filter(Boolean);
    const theProps = filterReactProps(props, FILTERED_PROPS);
    const Styled = styled(as)`
      ${styles.join('')}
    `;

    return <Styled className={classNames(CLASS_NAME, className)} {...theProps} />;
  }
}
