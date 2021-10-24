function sum(number){
    let counter = number;
    let sum = 0;
    let currentNumber = 1;

    while (counter>0) {
        
            sum+=currentNumber;
            console.log(currentNumber);
            currentNumber+=2;
            counter--;
    }
    console.log(`Sum: ${sum}`);
}
sum(5)