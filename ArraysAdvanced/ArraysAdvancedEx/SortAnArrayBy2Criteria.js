function solve(array) {

    array.sort((a, b) => {
        if (a.length === b.length) {
            return a.localeCompare(b);
        } else {
            return a.length - b.length
        }
    });

    array.forEach(element => console.log(element));
}
solve(["alpha", "beta", "gamma"])