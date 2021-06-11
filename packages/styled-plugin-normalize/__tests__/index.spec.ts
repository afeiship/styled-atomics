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

  test('plugin is mixed array', () => {
    const plugin = ['trans-center:x', { name: 'shadow', value: '5' }];
    expect(fn(plugin)).toEqual([
      { name: 'trans-center', value: 'x' },
      { name: 'shadow', value: '5' }
    ]);
  });
});
