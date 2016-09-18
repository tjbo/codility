'use strict';

const solution = require('./distinct');

const chai = require('chai')
const expect = chai.expect; // we are using the "expect" style of Chai
const generator = require('../inputGenerator.js')

const testValue1 = [0, 1, 2,3,4,5 ]
const testValue2 = [1, 1, 0, 1, 1, 1, 1]
const testValue3 = [5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8]
const testValue4 = [-1, -2, -3]
const testValue5 = generator.makeArrayOfNumbers(-100, 100);
const testValue6 = generator.makeArrayOfNumbers(0, 99999);

describe('solution', function() {
  it('testValue1', function() {
    expect(solution(testValue1)).to.equal(6);
    });
    it('testValue2', function() {
    expect(solution(testValue2)).to.equal(2);
  });
    it('testValue3', function() {
    expect(solution(testValue3)).to.equal(8);
    });
    it('testValue4', function() {
    expect(solution(testValue4)).to.equal(3);
    });
   it('testValue5', function() {
    expect(solution(testValue5)).to.equal(201);
  });
   it('testValue6', function () {
     this.timeout(500000);
    expect(solution(testValue6)).to.equal(100000);
  });

});