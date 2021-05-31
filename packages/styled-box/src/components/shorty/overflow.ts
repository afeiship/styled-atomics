export default (options) => {
  const { props, data } = options;
  const { ovh, x, y, ovs, ova } = props;

  const values = props.engine.css`
    ${ovh && 'overflow: hidden;'}
    ${ovs && 'overflow: scroll;'}
    ${ova && 'overflow: auto;'}

    ${ovh && x && 'overflow-x: hidden;'}
    ${ovh && y && 'overflow-y: hidden;'}

    ${ovs && x && 'overflow-x: scroll;'}
    ${ovs && y && 'overflow-y: scroll;'}
  `;

  options.data = data.concat(values);
  return options;
};
