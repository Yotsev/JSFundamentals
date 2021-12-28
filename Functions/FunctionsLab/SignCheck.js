function solve(firstNum, secondNum, thirdNum) {

    let result = '';
    if (firstNum >= 0 && secondNum >= 0 && thirdNum >= 0) {
        result = 'Positive';
    } else if (firstNum < 0 && secondNum < 0 && thirdNum < 0) {
        result = 'Negative';
    } else if ((firstNum < 0 && secondNum < 0) || (firstNum < 0 && thirdNum < 0) || (secondNum < 0 && thirdNum < 0)) {
        result = 'Positive';
    } else if (firstNum < 0 || secondNum < 0 || thirdNum < 0) {
        result = 'Negative';
    }

    console.log(result);
}

solve(-1, -2, -3);
solve(-1, 2, -3);