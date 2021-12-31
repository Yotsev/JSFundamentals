function solve(input) {

    let parking = {};

    for (const car of input) {
        let [direction, number] = car.split(', ');

        parking[number] = direction;
    }
    let filteredCars = []
    let parkedCars = Object.entries(parking).forEach(n => {
        if (n[1] !== 'OUT') {
            filteredCars.push(n[0]);
        }
    })

    return filteredCars.length === 0 ? 'Parking Lot is Empty' : filteredCars.sort((a, b) => a.localeCompare(b)).forEach(element => {
        console.log(element);
    });
}

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);