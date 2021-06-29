import css from '@jswork/styled-css';
import normalize from '@jswork/styled-debug-normalize';

export default (options) => {
  const { props, data } = options;
  const { val, unit, debug } = props;

  if (!debug) return options;

  const { color, width } = normalize(debug);
  const value = val!(width) + unit;
  const values = css`
    border: ${value} solid ${color};
  `;

  options.data = data.concat(values);
  return options;
};
