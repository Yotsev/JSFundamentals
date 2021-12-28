function solve(input) {

    let inputAsString = input.toString();

    const oddSum = a => {
        let sum = 0;
        for (let i = 0; i < a.length; i ++) {
            if (Number(a[i] % 2 === 1)) {
                sum += Number(a[i]);
            }
        }

        return sum;
    };
    const evenSum = a => {
        let sum = 0;
        for (let i = 0; i < a.length; i ++) {
            if (Number(a[i] % 2 === 0)) {
                sum += Number(a[i]);
            }
        }

        return sum;
    };

    let odd = oddSum(inputAsString);
    let even = evenSum(inputAsString);
    
    console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}

solve(1000435)