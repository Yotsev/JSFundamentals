function solve(firstNum, secondNum) {
    let output = [1];

    for (let i = 1; i < firstNum; i++) {
        let currentSum = 0;
        let start = Math.max(0,i-secondNum)
        let currentSlice = output.slice(start,start + secondNum);
        for (const num of currentSlice) {
            currentSum+=num;
        }

        output.push(currentSum);
    }

    console.log(output.join(' '));
}
solve(8, 2)