// calc.test.js
const { add, subtract } = require('./calc');

describe('calcのテスト', () => {
  describe('#add', () => {
    test('1と2を渡すと3が返ること', () => {
      expect(add(1, 2)).toBe(3);
    });
    test('-1と-2を渡すと-3が返ること', () => {
      expect(add(-1, -2)).toBe(-3);
    });
  });
  describe('#subtract', () => {
    test('2と1を渡すと1が返ること', () => {
      expect(subtract(2, 1)).toBe(1);
    });
    test('1と2を渡すと-1が返ること', () => {
      expect(subtract(1, 2)).toBe(-1);
    });
  });
});