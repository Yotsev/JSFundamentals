function solve(array) {
    let output = [];
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            output.unshift(array[i]);
        }else{
            output.push(array[i])
        }
    }

    for (const num of output) {
        console.log(num);
    }
}
solve([7, -2, 8, 9])