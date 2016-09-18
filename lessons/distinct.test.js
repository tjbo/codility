'use strict';

const solution = require('./distinct');

const chai = require('chai')
const expect = chai.expect; // we are using the "expect" style of Chai
const generator = require('../inputGenerator.js')

const testValue1 = generator.makeArrayOfBinary(1000000)
const testValue2 = [0, 1, 2,3,4,5 ]
const testValue3 = [1, 1, 0, 1, 1, 1, 1]
const testValue4 = [5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8]

describe('solution', function() {
  it('testValue1', function() {
    expect(solution(testValue1)).to.equal(6);
    });
    it('testValue2', function() {
    expect(solution(testValue2)).to.equal(2);
  });
    it('testValue3', function() {
    expect(solution(testValue3)).to.equal(13);
  });
});