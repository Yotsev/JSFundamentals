function solve(input) {
    let train = input.shift().split(' ').map(Number);
    let maxCpacity = Number(input.shift());

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(' ');

        if (command.length === 2) {
            train.push(Number(command[1]))
        } else {
            for (let j = 0; j < train.length; j++) {
                if (train[j] + Number(command[0]) <= maxCpacity) {
                    train[j] += Number(command[0]);
                    break;
                }
            }
        }
    }

    return train.join(' ');
}
console.log(solve(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75'])); 