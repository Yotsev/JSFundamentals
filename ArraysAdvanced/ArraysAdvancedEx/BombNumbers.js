function solve(field, bomb) {
    let [specialNumber, power] = [...bomb];

    while (field.includes(specialNumber)) {
        
        let bombIndex = field.indexOf(specialNumber)
        let startIndex = Math.max(bombIndex - power, 0)
        

        field.splice(startIndex, power+1);
        field.splice(startIndex, power);
    }

    let sum = 0;

    if (field.length === 0) {
        sum = 0;
    } else {
        sum = field.reduce((acc, curr) => {
            acc += curr;
            return acc;
        }, 0);
    }

    console.log(sum);
}
solve([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1])