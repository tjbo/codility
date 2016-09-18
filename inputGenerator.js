'use strict';
 //[1..100,000];
//create large inputs of for use in tests

class InputGenerator {
    makeArrayOfBinary(numberOfValues) {

        let arr = [];
        let newValue;
        let random;

        for (let i = 0; i < numberOfValues; i++) {
            random = Math.random();

            if (random > .5) {
                newValue = 1;
            } else {
                newValue = 0;
            }
            arr.push(newValue)
        }

        return arr;



    }
}

const generator = new InputGenerator();

module.exports = generator;