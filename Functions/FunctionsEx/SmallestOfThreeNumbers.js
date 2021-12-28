function smallestNumber(firtNum, secondNum, thirdNum){
    let minNumber = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < arguments.length; i++) {
        if (minNumber> arguments[i]) {
            minNumber = arguments[i];
        }        
    }

    return minNumber;
}

console.log(smallestNumber(2,5,3)); 