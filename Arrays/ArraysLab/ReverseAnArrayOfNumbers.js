function reverse(number, input) {
    let output = [];

    for (let i = number - 1; i >= 0; i--) {
        output.push(input[i]);
    }

    console.log(output.join(' '));
}