import { css } from 'styled-components';

export default (inEntity) => {
  const { props, data } = inEntity;
  const { plugin, options } = props;

  if (plugin) {
    if (plugin.startsWith('shadow:')) {
      const value = parseInt(plugin.split(':')[1]) || 1;
      const inset = options?.inset ? 'inset ' : '';
      const values = css`
        box-shadow: ${value === 1 && inset + '0 1px 2px rgba(0, 0, 0, 0.2);'};
        box-shadow: ${value === 2 && inset + '0 1px 6px rgba(0, 0, 0, 0.12);'};
        box-shadow: ${value === 3 && inset + '0 3px 10px rgba(0, 0, 0, 0.16);'};
        box-shadow: ${value === 4 && inset + '0 10px 30px rgba(0, 0, 0, 0.19);'};
        box-shadow: ${value === 5 && inset + '0 14px 45px rgba(0, 0, 0, 0.25);'};
        box-shadow: ${value === 6 && inset + '0 19px 60px rgba(0, 0, 0, 0.3);'};
      `;
      inEntity.data = data.concat(values);
    }
  }

  return inEntity;
};
