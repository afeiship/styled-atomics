import { css } from 'styled-components';

export default (options) => {
  const { props, data } = options;
  const { debug } = props;
  const bdc = debug === true ? 'red' : debug;

  const values = css`
    ${debug && 'border: 1px solid ' + bdc + ';'}
  `;

  options.data = data.concat(values);
  return options;
};
