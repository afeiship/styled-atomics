import { css } from 'styled-components';

export default (options) => {
  const { props, data } = options;
  const { debug } = props;

  const values = css`
    ${debug && 'border: 1px solid ' + debug + ';'}
  ` as Array<string>;

  options.data = [].concat(data, values);
  return options;
};
