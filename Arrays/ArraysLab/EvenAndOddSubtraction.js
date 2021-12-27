function difference(input) {
    let oddSum = 0;
    let evenSum = 0;

    for (const num of input) {
        if (num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }

    let reult = evenSum - oddSum;
    console.log(reult);
}

difference([0, -2, -1,-3])