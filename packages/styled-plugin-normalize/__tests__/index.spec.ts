import fn from '../src';

describe('api.basic', () => {
  test('plugin on a string', () => {
    const plugin = 'trans-center';
    expect(fn(plugin)).toEqual([{ name: 'trans-center' }]);
  });

  test('plugin on a string with value', () => {
    const plugin = 'trans-center:xy';
    expect(fn(plugin)).toEqual([{ name: 'trans-center', value: 'xy' }]);
  });

  test('plugin on with multiple plugin', () => {
    const plugin = 'trans-center:x; shadow:5;';
    expect(fn(plugin)).toEqual([
      { name: 'trans-center', value: 'x' },
      { name: 'shadow', value: '5' }
    ]);
  });

  test('plugin is pure object', () => {
    const plugin = { name: 'trans-center', value: 'x' };
    expect(fn(plugin)).toEqual([{ name: 'trans-center', value: 'x' }]);
  });

  test('plugin is pure array', () => {
    const plugin = [
      { name: 'trans-center', value: 'x' },
      { name: 'shadow', value: '5' }
    ];
    expect(fn(plugin)).toEqual([
      { name: 'trans-center', value: 'x' },
      { name: 'shadow', value: '5' }
    ]);
  });

  test('plugin is string array', () => {
    const plugin = ['trans-center:x', 'shadow:5;'];
    expect(fn(plugin)).toEqual([
      { name: 'trans-center', value: 'x' },
      { name: 'shadow', value: '5' }
    ]);
  });

  test('plugin is string with space', () => {
    const plg1 = 'trans-center:x; abs-center: xy;';
    const plg2 = 'trans-center:x; abs-center: xy';
    const result = [
      { name: 'trans-center', value: 'x' },
      { name: 'abs-center', value: 'xy' }
    ];
    expect(fn(plg1)).toEqual(result);
    expect(fn(plg2)).toEqual(result);
  });

  test('plugin is mixed array', () => {
    const plugin = ['trans-center:x', { name: 'shadow', value: '5' }];
    expect(fn(plugin)).toEqual([
      { name: 'trans-center', value: 'x' },
      { name: 'shadow', value: '5' }
    ]);
  });

  test('plugin the same plugin with diff params', () => {
    const plugin = [
      { name: 'fixed-toolbar', value: 200, gap: 20, role: 'header' },
      { name: 'fixed-toolbar', value: 300, gap: 10, role: 'footer' }
    ];

    expect(fn(plugin)).toEqual([
      { name: 'fixed-toolbar', value: 200, gap: 20, role: 'header' },
      { name: 'fixed-toolbar', value: 300, gap: 10, role: 'footer' }
    ]);
  });
});
