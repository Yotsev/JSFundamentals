function solve(array) {
    return Number(array.shift()) + Number(array.pop());
}

console.log(solve(['20', '30', '40']));