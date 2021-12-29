function solve(input) {
    let list = [];

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(' is ');

        if (command[1] === 'going!') {
            if (!list.includes(command[0])) {
                list.push(command[0])
            } else {
                console.log(`${command[0]} is already in the list!`);
            }
        } else {
            if (list.includes(command[0])) {
                list.splice(list.indexOf(command[0]), 1);
            } else {
                console.log(`${command[0]} is not in the list!`);
            }
        }
    }

    return list.forEach(element => console.log(element));
}
solve(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']);