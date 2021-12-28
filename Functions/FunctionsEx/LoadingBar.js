function solve(number) {
    let dots = (100-number)/10;
    let percents = 10-dots;
    let bar = `[${'%'.repeat(percents)}${'.'.repeat(dots)}]`;
    if (percents === 10) {
        console.log(`${number}% Complete!`);
    }else{
        console.log(`${number}% ${bar}`);
        console.log('Still loading...');
    }
}
solve(30)
solve(50)
solve(100)