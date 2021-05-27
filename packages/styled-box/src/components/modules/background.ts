import { css } from 'styled-components';

export default (options) => {
  const { props, data } = options;
  const { bg } = props;

  const values = css`
    ${bg && 'background:' + bg + ';'}
  ` as Array<string>;

  options.data = [].concat(data, values);
  return options;
};
