const toRoman = require('./roman').toRoman;

test('1', () => {
  expect(toRoman(1)).toBe('I');
});
