import { css } from 'styled-components';

export default (options) => {
  const { props, data } = options;
  const { debug } = props;

  const values = css`
    ${debug && 'border: 1px solid ' + debug + ';'}
  `;

  options.data = data.concat(values);
  return options;
};
