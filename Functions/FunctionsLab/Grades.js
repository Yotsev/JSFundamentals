function socre(grade) {
    function performence(grade) {

        if (grade >= 2.00 && grade <= 2.99) {
            return `Fail (2)`;
        } else if (grade >= 3.00 && grade <= 3.49) {
            return `Poor (${grade.toFixed(2)})`;
        } else if (grade >= 3.50 && grade <= 4.49) {
            return `Good (${grade.toFixed(2)})`;
        } else if (grade >= 4.50 && grade <= 5.49) {
            return `Very good (${grade.toFixed(2)})`;
        } else if (grade >= 5.50 && grade <= 6.00) {
            return `Excellent (${grade.toFixed(2)})`;
        }
    }

    console.log(performence(grade));
}