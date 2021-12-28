function solve(number) {
    function printRow(a) {
        console.log(`${a} `.repeat(number));
    }

    for (let i = 0; i < number; i++) {
        printRow(number);        
    }
}
solve(7)