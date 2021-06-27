import fn from '../src';

describe('api.basic', () => {
  test('normail single value case', () => {
    const str1 = '#ccc@3';
    const str2 = '@3';
    const str3 = 'red@3';
    const str4 = true;

    console.log(fn(str1));
    console.log(fn(str2));
    console.log(fn(str3));
    console.log(fn(str4));

    expect(fn(str1)).toEqual({ color: '#ccc', width: 3 });
  });
});
