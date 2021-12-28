function solve(firstNumber, secondNumber) {
    
    function factorial(number) {
        let fact = 1;
        for (let i = 1; i <= number; i++) {
                fact*= i;            
        }
        return fact;
    }
    let firstFactorial = factorial(firstNumber);
    let secondFactorial = factorial(secondNumber);
    
    let result = (firstFactorial/secondFactorial).toFixed(2);

    return result;
}
console.log(solve(0,2));
console.log(solve(5,2));