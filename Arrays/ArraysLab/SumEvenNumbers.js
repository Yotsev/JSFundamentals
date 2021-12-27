function sums(input){
    let evenSum = 0;

    for (const num of input) {
        if (Number(num)%2===0) {
            evenSum += Number(num);
        }
    }

    console.log(evenSum);
}

sums(['1','2','3','4','5','6'])