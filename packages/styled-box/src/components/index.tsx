import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import nx from '@jswork/next';
import nxCompose from '@jswork/next-compose';
import filterReactProps from '@jswork/filter-react-props';
import { Props, PluginEntity } from '@jswork/styled-types';
import atomics from './composite';
import pluginComposeEntity from '@jswork/styled-plugin-compose-entity';

const CLASS_NAME = 'styled-box';
const FILTERED_PROPS = ['rel', 'x', 'y'];

export default class StyledBox extends Component<Props, { isMounted: boolean }> {
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
    options: PropTypes.any
  };

  static defaultProps = {
    sub: '*',
    unit: 'px',
    as: 'div',
    val: nx.stubValue,
    plugins: [],
    staticStyled: false
  };

  private theProps;
  private Styled;

  constructor(inProps) {
    super(inProps);
    this.state = { isMounted: false };
  }

  shouldComponentUpdate(inProps) {
    const { staticStyled } = inProps;
    if (!staticStyled) this.styledUpdate();
    return true;
  }

  componentDidMount() {
    this.styledUpdate();
  }

  styledUpdate() {
    const { className, as, styled, plugins, ...props } = this.props;
    const fn = nxCompose.apply(null, atomics.concat(pluginComposeEntity));
    const defaultEntity: PluginEntity = { props: this.props, data: [] };
    const options = fn(defaultEntity);
    const styles = options.data.filter(Boolean);
    this.theProps = filterReactProps(props, FILTERED_PROPS);
    this.Styled = styled(as)`
      ${styles.join('')}
    `;

    this.setState({ isMounted: true });
  }

  render() {
    const { className } = this.props;
    const { isMounted } = this.state;
    if (!isMounted) return null;
    return <this.Styled className={classNames(CLASS_NAME, className)} {...this.theProps} />;
  }
}
