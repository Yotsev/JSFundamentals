function sumAndPrint(numOne, numTwo) {
    let sum = 0;
    let toPrint = '';
    for (let i = numOne; i <= numTwo; i++) {
        sum+=i;
        toPrint +=`${i} `;
    }
    console.log(toPrint);
    console.log(`Sum: ${sum}`);
}

sumAndPrint(5, 10)
sumAndPrint(0, 26)
sumAndPrint(50, 60)