function sumOfNumbers(firstNum, secondNum, thirdNum){
    let sum = firstNum + secondNum + thirdNum;

    let output = Math.trunc(sum) === sum ? 'Integer' : 'Float';

    console.log(`${sum} - ${output}`);
}