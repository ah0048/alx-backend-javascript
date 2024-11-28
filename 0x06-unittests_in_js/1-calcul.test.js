const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should return 4', () => {
    assert.equal(calculateNumber('SUM', 1, 3), 4);
    assert.equal(calculateNumber('SUM', 1.4, 3.5), 5);
  });
  it('should return 5', () => {
    assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
    assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
  });
  it('test for -ve numbers', () => {
    assert.equal(calculateNumber('SUM', -1.5, 3.7), 3);
    assert.equal(calculateNumber('SUM', 1.5, -3.7), -2);
  });
  it('test for zeros ,-ve and +ve numbers', () => {
    assert.equal(calculateNumber('SUM', 0, 0), 0);
    assert.equal(calculateNumber('SUM', -1, 1), 0);
    assert.equal(calculateNumber('SUM', 1, -1), 0);
  });
  it('should return 2', () => {
    assert.equal(calculateNumber('SUBTRACT', 3, 1), 2);
    assert.equal(calculateNumber('SUBTRACT', 3.5, 1.4), 3);
  });
  it('should return 1', () => {
    assert.equal(calculateNumber('SUBTRACT', 3.7, 1.2), 3);
    assert.equal(calculateNumber('SUBTRACT', 3.7, 1.5), 2);
  });
  it('test for -ve numbers', () => {
    assert.equal(calculateNumber('SUBTRACT', -1.5, 3.7), -5);
    assert.equal(calculateNumber('SUBTRACT', 1.5, -3.7), 6);
  });
  it('test for zeros ,-ve and +ve numbers', () => {
    assert.equal(calculateNumber('SUBTRACT', 0, 0), 0);
    assert.equal(calculateNumber('SUBTRACT', -1, 1), -2);
    assert.equal(calculateNumber('SUBTRACT', 1, -1), 2);
  });
  it('should return 2', () => {
    assert.equal(calculateNumber('DIVIDE', 4, 2), 2);
    assert.equal(calculateNumber('DIVIDE', 4.5, 2.2), 2.5);
  });
    it('divide by zero', () => {
    assert.equal(calculateNumber('DIVIDE', 4, 0), 'Error');
    });
    it('test for invalid type', () => {
    assert.throws(() => calculateNumber('MULTIPLY', 4, 2), {
      message: 'Invalid type: MULTIPLY',
    });
    });
});
