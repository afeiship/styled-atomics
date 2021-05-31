import { css } from 'styled-components';

export default (options) => {
  const { props, data } = options;
  const { debug, value } = props;
  const color = value || 'red';

  const values = css`
    ${debug && 'border: 2px solid ' + color + ';'}
  `;

  options.data = data.concat(values);
  return options;
};
