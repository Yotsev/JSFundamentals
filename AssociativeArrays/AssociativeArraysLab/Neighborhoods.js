function solve(input) {
    let neighborhoods = new Map();

    let [...locations] = input.shift().split(', ');

    for (const loction of locations) {
        neighborhoods.set(loction, []);
    }

    for (let i = 0; i < input.length; i++) {
        let [hood, person] = input[i].split(' - ');

        if (neighborhoods.has(hood)) {
            neighborhoods
                .get(hood)
                .push(person);
        }
    }

    let sortedHoods = Array.from(neighborhoods).sort((a, b) => b[1].length - a[1].length);
    neighborhoods = new Map(sortedHoods);
    
    for (const [hood,persons] of neighborhoods) {
        console.log(`${hood}: ${persons.length}`);
        persons.forEach(element => { console.log(`--${element}`);
        });
    }
}
solve(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy'])
