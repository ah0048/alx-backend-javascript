const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4', () => {
    assert.equal(calculateNumber(1, 3), 4);
    assert.equal(calculateNumber(1.4, 3.5), 5);
  });
  it('should return 5', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
  it('test for -ve numbers', () => {
    assert.equal(calculateNumber(-1.5, 3.7), 3);
    assert.equal(calculateNumber(1.5, -3.7), -2);
  });
  it('test for zeros ,-ve and +ve numbers', () => {
    assert.equal(calculateNumber(0, 0), 0);
    assert.equal(calculateNumber(-1, 1), 0);
    assert.equal(calculateNumber(1, -1), 0);
  });
});
