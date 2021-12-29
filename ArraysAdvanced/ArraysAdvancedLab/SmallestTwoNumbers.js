function solve(array) {
    array.sort((a,b)=>a-b);
    let output = array.slice(0,2);
    console.log(output.join(' '));
}
solve([30, 15, 50, 5])