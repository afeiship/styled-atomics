/**
debug:#ccc@3
debug:red@3
debug:@3
 */
import nxSample from '@jswork/next-sample';

const COLORS = ['#004FC0', '#E01FAD', '#FF7100', '#137A19', '#70AC00', '#0070c0', '#20C281'];

export default (inValue) => {
  const sampleColor = nxSample(COLORS);
  const ifeTruthy = inValue === true;
  if (ifeTruthy) return { color: sampleColor, width: 1 };
  const ifeExistAt = inValue.includes('@');
  if (!ifeExistAt) return { color: sampleColor, width: 1 };
  const [color, width] = inValue.split('@');
  return { color: color || sampleColor, width: parseInt(width) };
};
