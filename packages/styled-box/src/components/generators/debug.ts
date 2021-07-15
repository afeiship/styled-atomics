import css from '@jswork/styled-css';
import normalize from '@jswork/styled-debug-normalize';

export default (options) => {
  const { props, data } = options;
  const { val, unit, sub, unitless, debug, debug_, debug__ } = props;
  const _unit = unitless ? '' : unit;
  if(!debug && !debug_ && !debug__) return options;

  const { color, width } = normalize(debug || debug_ || debug__);
  const value = val!(width) + _unit;
  const values = css`
    ${(debug__ || debug) && 'border:' + value + ' solid ' + color + ';'}
    ${(debug__ || debug_) && '> ' + sub + ' { border: ' + value + ' solid ' + color + '; }'}
  `;

  options.data = data.concat(values);
  return options;
};
