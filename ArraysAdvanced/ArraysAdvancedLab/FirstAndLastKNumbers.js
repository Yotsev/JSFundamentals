function solve(array) {
    
    let numberToShift = array.shift();

    let fistKElements = array.slice(0, numberToShift);
    let lasttKElements = array.slice(array.length - numberToShift);

    console.log(fistKElements.join(' '));
    console.log(lasttKElements.join(' '));
}
solve([2, 
    7, 8, 9])
solve([3,
    6, 7, 8, 9])