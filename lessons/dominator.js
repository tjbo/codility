'use strict'

const solution = module.exports = function solution(A) {

    Object.prototype.getKeyByValue = function (value) {
        for (var prop in this) {
            if (this.hasOwnProperty(prop)) {
                if (this[prop] === value)
                    return prop;
            }
        }
    }

//stole this from - http://www.shamasis.net/2009/09/fast-algorithm-to-find-unique-items-in-javascript-array/
Array.prototype.dominator = function() {
    let o = {}, i, l = this.length;

    let threshold = l / 2;
    let ret = -1;

    for (i = 0; i < l; i += 1) {
        o[this[i]] = parseInt(o[this[i]]) + 1 || 1;

        if (threshold < o[this[i]]) {
            ret = i;
            break;
        }

    }
    console.log(ret)
    return ret;


    };


return A.dominator();
}

solution([1,2,33,33,33,33,33,5]);
