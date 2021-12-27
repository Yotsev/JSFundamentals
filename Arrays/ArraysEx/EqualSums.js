function solve(arr) {
    
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
    
        let leftSum = 0;
        let rightSum = 0;

        for (let j = i + 1; j < arr.length; j++) {
            rightSum += arr[j];
        }
        for (let k = i - 1; k >= 0; k--) {
            leftSum += arr[k]
        }

        if (leftSum === rightSum) {
            index = i;
            break;
        }
    }

    if (index !== -1) {
        console.log(index);
    } else{
        console.log('no');
    }
}

solve([1])