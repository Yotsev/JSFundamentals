function townInfo(city){
    for (const key in city) {
        console.log(`${key} -> ${city[key]}`);
    }
}
townInfo({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})