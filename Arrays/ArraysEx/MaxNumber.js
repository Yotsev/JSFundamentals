function solve(arr) {
    let topInts = [];
    for (let i = 0; i < arr.length-1; i++) {
        let isBigger = true;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] <= arr[j]) {
                isBigger = false;
                break;
            }
        }
        if (isBigger) {
            topInts.push(arr[i])
        }
    }
    topInts.push(arr[arr.length-1])

    console.log(topInts.join(' '));
}
solve([-1,-5,-4,-3,-2])