import css from '@jswork/styled-css';

export default (options) => {
  const { props, data } = options;
  const { ovh, x, y, ovs, ova } = props;

  const values = css`
    ${ovh && !x && !y && 'overflow: hidden;'}
    ${ovs && !x && !y && 'overflow: scroll;'}
    ${ova && 'overflow: auto;'}

    ${ovh && x && 'overflow-x: hidden;'}
    ${ovh && y && 'overflow-y: hidden;'}

    ${ovs && x && 'overflow-x: scroll;'}
    ${ovs && y && 'overflow-y: scroll;'}
  `;

  options.data = data.concat(values);
  return options;
};
