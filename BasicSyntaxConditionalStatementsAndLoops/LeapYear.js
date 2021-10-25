function type(data) {
    let year = data;
    let isLeap = false
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        isLeap = true;
    }

    if (isLeap) {
        console.log('yes');
    } else {
        console.log('no');
    }
}

//type(1984)
//type(2003)
//type(4)
type(2000)