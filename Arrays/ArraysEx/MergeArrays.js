function solve(firstArr, secondArr){
    let merged = [];
    for (let i = 0; i < firstArr.length; i++) {
        if (i%2===0) {
            merged.push(Number(firstArr[i]) + Number(secondArr[i]))
        } else {
            merged.push(firstArr[i]+secondArr[i])
        }
    }

    console.log(merged.join(' - '));
}
solve(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])