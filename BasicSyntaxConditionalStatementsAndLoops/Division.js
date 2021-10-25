function devisable(num) {
    let number = num;
    let biggestDivider = 0;

    if (number % 2 === 0) {
        biggestDivider = 2;
    }
    if (number % 3 === 0) {
        biggestDivider = 3;
    }
    if (number % 6 === 0) {
        biggestDivider = 6;
    }
    if (number % 7 === 0) {
        biggestDivider = 7;
    }
    if (number % 10 === 0) {
        biggestDivider = 10;
    }

    if (biggestDivider===0) {
        console.log('Not divisible');
    }else{
        console.log(`The number is divisible by ${biggestDivider}`);
    }
}

devisable(30)