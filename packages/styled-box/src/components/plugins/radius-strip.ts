import { css } from 'styled-components';

export default (inEntity) => {
  const { props, data } = inEntity;
  const { plugin, options } = props;

  if (plugin) {
    if (plugin.startsWith('radius-strip')) {
      const value = options.value;
      const values = css`
        ${value.includes('t0') && 'border-top-left-radius: 0; border-top-right-radius:0;'};
        ${value.includes('r0') && 'border-top-right-radius: 0; border-bottom-right-radius:0;'};
        ${value.includes('b0') && 'border-bottom-left-radius: 0; border-bottom-right-radius:0;'};
        ${value.includes('l0') && 'border-bottom-left-radius: 0; border-top-left-radius:0;'};
      `;
      inEntity.data = data.concat(values);
    }
  }

  return inEntity;
};