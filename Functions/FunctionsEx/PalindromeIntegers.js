function solve(input){
    for (let i = 0; i < input.length; i++) {
        let numberAsstring = input[i].toString();
        let isPalendrom = true;
        for (let j = 0; j < numberAsstring.length/2; j++) {
            if (numberAsstring[j]!==numberAsstring[numberAsstring.length-1-j]) {
                isPalendrom = false;
                break;
            }
        }
        console.log(isPalendrom);
    }
}

solve([32,2,232,1010])