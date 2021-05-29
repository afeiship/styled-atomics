import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import nxCompose from '@jswork/next-compose';
import filterReactProps from '@jswork/filter-react-props';
import { Props, PluginEntity } from './types';
import atomics from './composite';

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
    sub: '*',
    unit: 'px',
    nodeName: 'div',
    plugins: []
  };

  render() {
    const { className, nodeName, engine, plugins, ...props } = this.props;
    const fn = nxCompose.apply(null, atomics.concat(plugins as Array<any>));
    const defaultEntity: PluginEntity = { props: this.props, data: [] };
    const options = fn(defaultEntity);
    const styles = options.data;
    const theProps = filterReactProps(props, FILTERED_PROPS);
    const Styled = engine!.styled(nodeName)`
      ${styles.join('')}
    `;

    return <Styled className={classNames(CLASS_NAME, className)} {...theProps} />;
  }
}
