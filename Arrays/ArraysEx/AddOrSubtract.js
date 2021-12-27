function solve(input) {
    let modified = []
    let originalSum = 0;
    let modifiedSum = 0;

    for (let i = 0; i < input.length; i++) {

        if (input[i] % 2 === 0) {
            modified.push(input[i] + i)
        } else {
            modified.push(input[i] - i);
        }
        originalSum += input[i];
        modifiedSum += modified[i];
    }
    console.log(modified);
    console.log(originalSum);
    console.log(modifiedSum);
}
solve([5, 15, 23, 56, 35])