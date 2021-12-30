function solve(input) {
    let words = new Map();
    for (let i = 0; i < input.length; i++) {

        let word = input[i];
        let currentCount = 1;

        if (words.has(word)) {
            currentCount += words.get(word);
        }

        words.set(word, currentCount);
    }

    let sortedWords = Array.from(words).sort((a, b) => b[1] - a[1])

    words = new Map(sortedWords);

    for (const [word,count] of words) {
        console.log(`${word} -> ${count} times`);
    }
}
solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])