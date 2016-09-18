'use strict';

const chai = require('chai');
const expect = chai.expect; // we are using the "expect" style of Chai
const generator = require('../inputGenerator.js');



const testValue1 = generator.makeArrayOfBinary(1000000);
const testValue2 = [0, 1, 0, 1, 1, 1, 1];
const testValue3 = [1, 1, 0, 1, 1, 1, 1];

/**
 * array contains only 0s, or 1s
 * the function should return −1 if the number of pairs of passing cars exceeds 1,000,000,000
 */

function solution(A) {
    let numberOfPassingCars = 0;
    for (let i = 0; i < A.length; i++) {

        if (A[i] === 0) {
            for (let j = i; j < A.length; j++) {
                if (A[j] === 1) {

                    if (numberOfPassingCars > 1000000000) {
                        return -1;
                    } else {

                        numberOfPassingCars++;

                    }
                }
            }
        }
    }
    console.log('test', numberOfPassingCars);
    return numberOfPassingCars;
}


solution(testValue1);



