import { css } from 'styled-components';

export default (options) => {
  const { props, data } = options;
  const { disabled, hidden } = props;

  const values = css`
    ${disabled && 'pointer-events: none; opacity: 0.5; user-select: none;'}
    ${hidden && 'display: none;'}
  `;

  options.data = data.concat(values);
  return options;
};
