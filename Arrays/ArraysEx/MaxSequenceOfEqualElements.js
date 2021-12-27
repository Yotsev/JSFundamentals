function solve(arr){
    let topIndex = -1;
    let topCout = 0;

    for (let i = 0; i < arr.length-1; i++) {
        
        let currentIndex = i;
        let currentCout = 0;
        
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i]===arr[j]) {
                currentCout++;
            }else {
                break;
            }

            if (topCout<currentCout) {
                topCout = currentCout;
                topIndex=currentIndex;
            }
        }
    }

    let output = arr.splice(topIndex,topCout+1);
    console.log(output.join(' '));
}
solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
solve([0, 1, 1, 5, 2, 2, 6, 3, 3])