import fn from '../src';

describe('api.basic', () => {
  test('normail single value case', () => {
    const bg = '#f00';
    const bg_ = '#f50';

    const res = fn`
      ${bg && 'background: ' + bg + ';'}
      ${bg_ && '> * { background: ' + bg + '; }'}
    `;

    expect(res).toEqual([
      '\n      ',
      'background: #f00;',
      '\n      ',
      '> * { background: #f00; }',
      '\n    '
    ]);
  });
});
