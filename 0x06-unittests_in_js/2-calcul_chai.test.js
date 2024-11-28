const chai = require('chai');
const calculateNumber = require('./1-calcul');

const { expect } = chai;

describe('calculateNumber', () => {
  it('should return 4', () => {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    expect(calculateNumber('SUM', 1.4, 3.5)).to.equal(5);
  });
  it('should return 5', () => {
    expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
  });
  it('test for -ve numbers', () => {
    expect(calculateNumber('SUM', -1.5, 3.7)).to.equal(3);
    expect(calculateNumber('SUM', 1.5, -3.7)).to.equal(-2);
  });
  it('test for zeros ,-ve and +ve numbers', () => {
    expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    expect(calculateNumber('SUM', -1, 1)).to.equal(0);
    expect(calculateNumber('SUM', 1, -1)).to.equal(0);
  });
  it('should return 2', () => {
    expect(calculateNumber('SUBTRACT', 3, 1)).to.equal(2);
    expect(calculateNumber('SUBTRACT', 3.5, 1.4)).to.equal(3);
  });
  it('should return 1', () => {
    expect(calculateNumber('SUBTRACT', 3.7, 1.2)).to.equal(3);
    expect(calculateNumber('SUBTRACT', 3.7, 1.5)).to.equal(2);
  });
  it('test for -ve numbers', () => {
    expect(calculateNumber('SUBTRACT', -1.5, 3.7)).to.equal(-5);
    expect(calculateNumber('SUBTRACT', 1.5, -3.7)).to.equal(6);
  });
  it('test for zeros ,-ve and +ve numbers', () => {
    expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    expect(calculateNumber('SUBTRACT', -1, 1)).to.equal(-2);
    expect(calculateNumber('SUBTRACT', 1, -1)).to.equal(2);
  });
  it('should return 2', () => {
    expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
    expect(calculateNumber('DIVIDE', 4.5, 2.2)).to.equal(2.5);
  });
  it('divide by zero', () => {
    expect(calculateNumber('DIVIDE', 4, 0)).to.equal('Error');
  });
  it('test for invalid type', () => {
    expect(() => calculateNumber('MULTIPLY', 4, 2)).to.throw('Invalid type: MULTIPLY');
  });
});
