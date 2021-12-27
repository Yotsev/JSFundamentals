function isSepcial(number){

    for (let i = 1; i <= number; i++) {
        let currentNumber = i.toString();
        let currentSum = 0;
        
        for (let j = 0; j < currentNumber.length; j++) {
            currentSum += Number(currentNumber[j]);
        }
        
        let special = '';

        if (currentSum === 5 || currentSum === 7 || currentSum === 11) {
            special = 'True';
        } else {
            special = 'False';
        }

        console.log(`${i} -> ${special}`);
    }
}
isSepcial(15);
isSepcial(20)