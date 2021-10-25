function correctPassword(inputData) {
    let index = 0;
    let username = inputData[index];

    let counter = 0;

    for (let i = 1; i < inputData.length; i++) {
        
        if (counter === 3) {
            console.log(`User ${username} blocked!`);
            break;
        }

        let reversed = '';
        
        for (let j = inputData[i].length - 1; j >= 0; j--) {
            reversed+=inputData[i][j];
        }

        if (username === reversed) {
            console.log(`User ${username} logged in.`);
            break;
        }

        console.log('Incorrect password. Try again.');
        counter++;
    }
}

correctPassword(['Acer','login','go','let me in','recA'])