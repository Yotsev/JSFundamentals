function solve(array) {

    let ouput = [];

    array.sort((a, b) => b - a);

    while (array.length !== 0) {
        ouput.push(array.shift());
        ouput.push(array.pop());
    }

    console.log(ouput.join(' '));
}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);