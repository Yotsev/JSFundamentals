function solve(array) {
    let output = array.filter(x => array.indexOf(x) % 2 === 1).map(x => x * 2).reverse();
   
    console.log(output.join(' '));
}
solve([10, 15, 20, 25])