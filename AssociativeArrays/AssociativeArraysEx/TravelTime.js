function solve(input) {
    let countries = {};

    for (const info of input) {
        let [country, city, cost] = info.split(' > ');

        if (!countries.hasOwnProperty(country)) {
            countries[country] = {};
        }

        if (!countries[country].hasOwnProperty(city)) {
            countries[country][city] = Number.MAX_SAFE_INTEGER;
        }

        if (cost < countries[country][city]) {
            countries[country][city] = cost;
        }
    }

    let sortedByName = Object.keys(countries).sort((a,b)=> a.localeCompare(b))

    for (const country of sortedByName) {
        console.log(`${country} -> ${cityPrice(countries[country])}`);
    }

    function cityPrice(obj){
        let result = [];
        for (const key of Object.keys(obj)) {
            result.push(`${key} -> ${obj[key]}`);
        }

        return result.join(' ')
    }
}

solve([
    `Bulgaria > Sofia > 25000`,
`Bulgaria > Sofia > 25000`,
`Kalimdor > Orgrimar > 25000`,
`Albania > Tirana > 25000`,
`Bulgaria > Varna > 25010`,
`Bulgaria > Lukovit > 10`,
])