import { css } from 'styled-components';

export default (options) => {
  const { props, data } = options;
  const { plugin } = props;

  if (plugin) {
    if (plugin.includes('em-justify-list')) {
      const value = parseInt(plugin.split(':')[1]) || 1;
      const percentage = `${100/value}%`
      const values = css`
        margin: -0.5em;
        overflow: hidden;

        > .is-item {
          box-sizing: border-box;
          float: left;
          margin: 0.5em;
          width: calc(${percentage} - 1em);
        }
      `;
      options.data = data.concat(values);
    }
  }

  return options;
};
