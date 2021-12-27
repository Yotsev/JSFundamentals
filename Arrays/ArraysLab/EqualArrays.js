function equal(firstArr, secondArr) {

    let sum = 0;
    let index;
    let isEqual = true;

    for (let i = 0; i < firstArr.length; i++) {
        if (firstArr[i] !== secondArr[i]) {
            isEqual = false;
            index = i;
            break;
        } else {
            sum += Number(firstArr[i]);
        }
    }

    if (isEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${index} index`);
    }
}
equal(['10','20','30'], ['10','20','30'])
equal(['1','2','3','4','5'], ['1','2','4','4','5'])