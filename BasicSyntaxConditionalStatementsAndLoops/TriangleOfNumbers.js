function triangle(number) {

    for (let i = 1; i <= number; i++) {
        let toPrint = '';

        for (let j = 1; j <= i; j++) {
            toPrint += `${i} `;
        }

        console.log(toPrint);
    }
}
triangle(3)
triangle(5)
triangle(6)