import { css } from 'styled-components';

export default (options) => {
  const { props, data } = options;
  const { f, unit } = props;

  const values = css`
    ${f && 'font-size:' + f + unit + ';'}
  ` as Array<string>;

  options.data = [].concat(data, values);
  return options;
};
