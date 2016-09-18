'use strict';

const solution = require('./sentence.js');

const chai = require('chai')
const expect = chai.expect; // we are using the "expect" style of Chai
const generator = require('../inputGenerator.js')

const testValue1 = 'We test coders. Give us a try?';
const testValue2 = 'Forget  CVs..Save time . x x';
const testValue3 = 'This is a test sentence...?!, This is a test sentence that is longer than the other one.'
// const testValue4 = 'This is a test sentence number 2...?!, This is a test sentence number 2...?!,This is a test sentence number 2...?!'
// const testValue5 = generator.makeArrayOfNumbers(-100, 100);
// const testValue6 = generator.makeArrayOfNumbers(0, 99999);
// const testValue7 = generator.makeArrayOfOneValueMoreThanHalfOfValues(0, 99999, 777);

describe('solution', function() {
  it('testValue1', function() {
    expect(solution(testValue1)).to.equal(4);
    });
    it('testValue2', function() {
    expect(solution(testValue2)).to.equal(2);
  });
    it('testValue3', function() {
    expect(solution(testValue3)).to.equal(12);
    });
//     it('testValue4', function() {
//     expect(solution(testValue4)).to.equal(3);
//     });
//    it('testValue5', function() {
//     expect(solution(testValue5)).to.equal(-1);
//   });
//    it('testValue6', function () {
//      this.timeout(500000);
//     expect(solution(testValue6)).to.equal(-1);
//    });
//      it('testValue7', function () {
//      this.timeout(500000);
//     expect(solution(testValue7)).to.equal(99998);
//   });

});