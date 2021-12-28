function solve(firstNum, secondNum, thirdNum) {
    
    function sum(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a-b;
    }

    let sumRes = sum(firstNum,secondNum);
    let result = subtract(sumRes,thirdNum);
    console.log(result);
}

solve(23, 6, 10)