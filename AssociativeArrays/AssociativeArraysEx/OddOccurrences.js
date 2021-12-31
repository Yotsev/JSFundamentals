function solve(input) {
    let inputSplit = input.toLowerCase().split(' ');

    let wordsCount = new Map();

    for (let i = 0; i < inputSplit.length; i++) {
        if (!wordsCount.has(inputSplit[i])) {
            wordsCount.set(inputSplit[i],0);
        }

        wordsCount.set(inputSplit[i],wordsCount.get(inputSplit[i])+1);
    }

    let output = []
    let oddWords = Array.from(wordsCount).forEach(el => {
        if (el[1]%2!==0) {
            output.push(el[0]);
        }
    })
    
    return output.join(' ')
}
console.log(solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#'));