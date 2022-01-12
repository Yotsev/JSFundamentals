function solve(target, input) {
    let targetWords = target.split(', ');

    let sentenceAsArray = input.split(' ');

    for (let i = 0; i < sentenceAsArray.length; i++) {
        for (const word of targetWords) {
            if (word.length === sentenceAsArray[i].length && sentenceAsArray[i].includes('*')) {
                sentenceAsArray[i] = word;
            }
        }
    }

    console.log(sentenceAsArray.join(' '));
}
solve('great, learning',
    'softuni is ***** place for ******** new programming languages')