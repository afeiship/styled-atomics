import { css } from 'styled-components';

export default (options) => {
  const { props, data } = options;
  const { c } = props;

  const values = css`
    ${c && 'color:' + c + ';'}
  ` as Array<string>;

  options.data = [].concat(data, values);
  return options;
};
