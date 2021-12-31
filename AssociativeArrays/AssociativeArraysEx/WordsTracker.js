function solve(input) {
    let targetWords = input.shift().split(' ');
    let occurrences = {};

    for (const word of targetWords) {
        occurrences[word] = 0;
    }

    for (let i = 0; i < input.length; i++) {
        if (occurrences.hasOwnProperty(input[i])) {
            occurrences[input[i]]++;
        }
    }
    
    Object.entries(occurrences).sort((a, b) => b[1] - a[1]).forEach(el => console.log(`${el[0]} - ${el[1]}`));
}

solve([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])