function solve(firstArray, secondArray) {

    let[elementsToTake, elementsToDelete, searchNumber] = [...secondArray];

    let output = firstArray.slice(0, elementsToTake).slice(elementsToDelete).filter(x=>x===searchNumber);
    

    console.log(`Number ${searchNumber} occurs ${output.length} times.`);
}
solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3])