'use strict'




module.exports = function solution(A) {

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
    }

const unique = A.filter(onlyUnique);

    console.log(unique);




}












