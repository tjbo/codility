const solution = module.exports = function solution (A) {
  // create array from string, seprate by ? || . || !
    const sentences = A.split(/[\!,\?,\.]/).map((_sentence, index) => {

        const sentence = {}
        sentence.words = []

        //split words on space
        _sentence.split(' ').filter((word) => {
            if (word.length >= 1) {
                sentence.words.push(word)
            }
        })
        return sentence
    });

    //get longest sentence from array
    const longestSentence = Math.max.apply(Math, sentences.map((sentence) => {
        if (sentence.words) {
            return sentence.words.length;
        }
    }));
    console.log(sentences)

    return longestSentence;
}

solution('Your code is syntactically correct and works properly on the example test. Your code is syntactically correct and works ?!? properly on the example. Your code is syntactically correct and works properly on the example test.. ')
