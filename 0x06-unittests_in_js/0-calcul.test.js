import calculateNumber from './0-calcul.js';
import { assert } from 'chai';

describe('calculateNumber', function() {
    it('should return 4', function() {
        assert.equal(calculateNumber(1, 3), 4);
        assert.equal(calculateNumber(1.4, 3.5), 5);
    });
    it('should return 5', function() {
        assert.equal(calculateNumber(1.2, 3.7), 5);
        assert.equal(calculateNumber(1.5, 3.7), 6);
    });
    it('test for -ve numbers', function() {
        assert.equal(calculateNumber(-1.5, 3.7), 3);
        assert.equal(calculateNumber(1.5, -3.7), -2);
    });
    it('test for zeros ,-ve and +ve numbers', function() {
        assert.equal(calculateNumber(0, 0), 0);
        assert.equal(calculateNumber(-1, 1), 0);
        assert.equal(calculateNumber(1, -1), 0);
    });
});