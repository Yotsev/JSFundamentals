function isAmazing(number){
    let sum = 0;
    let num = number;
    while(number>0){
        let currentNumber = Math.trunc(number%10);
        sum+=currentNumber;
        number = number/10;
    }

    let sumAsString = sum.toString();

    let output = sumAsString.includes('9') ? 'True' : 'False';

    console.log(`${num} Amazing? ${output}`);
}
isAmazing(1233);