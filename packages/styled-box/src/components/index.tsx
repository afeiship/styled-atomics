import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import nx from '@jswork/next';
import nxCompose from '@jswork/next-compose';
import filterReactProps from '@jswork/filter-react-props';
import { Props, PluginEntity } from '@jswork/styled-types';
import deepEqual from 'deep-equal';
import pluginComposeEntity from '@jswork/styled-plugin-compose-entity';
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
    styled: PropTypes.any.isRequired,
    /**
     * The distance unit.
     */
    unit: PropTypes.string,
    /**
     * If remove the default unit.
     */
    unitless: PropTypes.bool,
    /**
     * Deault node name.
     */
    as: PropTypes.any,
    /**
     * The rem value transformer.
     */
    val: PropTypes.func,
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
    options: PropTypes.any,
    /**
     * The dependencies of the component.
     */
    deps: PropTypes.any,
    /**
     * The dynamic render for styled box.
     */
    staticStyled: PropTypes.bool
  };

  static defaultProps = {
    sub: '*',
    unit: 'px',
    unitless: false,
    as: 'div',
    val: nx.stubValue,
    plugins: [],
    staticStyled: false
  };

  getComparedProps = (inProps) => {
    const { val, plugins, children, as, ...compared } = inProps;
    return compared;
  };

  shouldComponentUpdate(inProps) {
    const { staticStyled, deps } = inProps;
    const isDeepEqual = deepEqual(deps, inProps.deps);
    if (staticStyled && isDeepEqual) return false;
    const oldProps = this.getComparedProps(this.props);
    const newProps = this.getComparedProps(inProps);
    return deepEqual(oldProps, newProps);
  }

  render() {
    const { className, as, styled, plugins, ...props } = this.props;
    const fn = nxCompose.apply(null, [pluginComposeEntity].concat(atomics));
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
