function condense(input) {
    let numbers = input;

    while (numbers.length !== 1) {
        let con = [];

        for (let i = 0; i < numbers.length - 1; i++) {
            con[i] = numbers[i] + numbers[i + 1];
        }

        numbers = con;
    }

    console.log(numbers[0]);
}
condense([2,10,3])