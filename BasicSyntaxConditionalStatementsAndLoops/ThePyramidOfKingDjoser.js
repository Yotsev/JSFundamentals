function resourcesRequired(firstNumber, secondNumber) {
    let base = firstNumber;
    let increment = secondNumber;

    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let goled = 0;

    let counter = 1;

    for (let i = base; i > 0; i -= 2) {

        let stoneRowCount = ((i - 2) * (i - 2)) * increment;
        let marbleRowCount = (i * 2 + (i - 2) * 2) * increment;
        let lapisRowCount = (i * 2 + (i - 2) * 2) * increment;

        if (i===2) {
            goled = (i * 2 + (i - 2) * 2) * incrementl
        }
        stone += stoneRowCount;

        if (counter === 5) {
            lapis += lapisRowCount;
        } else {
            marble += marbleRowCount;
        }

        counter++;
    }

    console.log(stone);
    console.log(marble);
    console.log(lapis);
}
resourcesRequired(11, 1)