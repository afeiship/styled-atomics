import css from '@jswork/styled-css';
import normalize from '@jswork/styled-debug-normalize';

export default (options) => {
  const { props, data } = options;
  const { val, unit, sub, unitless, debug, debug_ } = props;
  const _unit = unitless ? '' : unit;

  const { color, width } = normalize(debug || debug_);
  const value = val!(width) + _unit;
  const values = css`
    ${debug && 'border:' + value + ' solid ' + color + ';'}
    ${debug_ && '> ' + sub + ' { border: ' + value + ' solid ' + color + '; }'}
  `;

  options.data = data.concat(values);
  return options;
};
