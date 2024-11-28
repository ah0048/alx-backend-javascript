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
    assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
    assert.equal(calculateNumber('SUBTRACT', 1.4, 3.5), -3);
  });
  it('should return -3', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
    assert.equal(calculateNumber('SUBTRACT', 1.5, 3.7), -3);
  });
  it('test for -ve numbers', () => {
    assert.equal(calculateNumber('SUBTRACT', -1.5, 3.7), -6);
    assert.equal(calculateNumber('SUBTRACT', 1.5, -3.7), 6);
  });
  it('test for zeros ,-ve and +ve numbers', () => {
    assert.equal(calculateNumber('SUBTRACT', 0, 0), 0);
    assert.equal(calculateNumber('SUBTRACT', -1, 1), -2);
    assert.equal(calculateNumber('SUBTRACT', 1, -1), 2);
  });
  it('should return 4', () => {
    assert.equal(calculateNumber('DIVIDE', 8, 2), 4);
    assert.equal(calculateNumber('DIVIDE', 1.4, 3.5), 0.25);
  });
  it('should return 0.33', () => {
    assert.equal(calculateNumber('DIVIDE', 1.2, 3.7), 0.33);
    assert.equal(calculateNumber('DIVIDE', 1.5, 3.7), 0.4);
  });
  it('test for -ve numbers', () => {
    assert.equal(calculateNumber('DIVIDE', -1.5, 3.7), -0.4);
    assert.equal(calculateNumber('DIVIDE', 1.5, -3.7), -0.4);
  });
});
