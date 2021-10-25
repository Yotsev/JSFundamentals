function rounder(firstNumber, secondNumber){
    let numberToBeRounded = firstNumber;
    let precision = secondNumber;

    if (precision>15) {
        precision = 15;
    }

    let result = numberToBeRounded.toFixed(precision)

    console.log(parseFloat(result));
}
rounder(10.5,3)