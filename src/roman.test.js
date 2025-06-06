const toRoman = require('./roman').toRoman;

describe('Roman Numerals Functions', () => {

  test('toRoman', () => {
    expect(toRoman(1)).toBe('I');
  });

});
