function solve(input) {
    let guests = {
        vip: [],
        regular: []
    };
    while (input !== 'PARTY') {
        let guest = input.shift();

        if (guest === 'PARTY') {
            break;
        }

        if (!isNaN(guest[0])) {
            guests['vip'].push(guest);
        } else {
            guests['regular'].push(guest)
        }
    }

    for (const guest of input) {
        let index;
        if (guests.vip.includes(guest)) {
            index = guests.vip.indexOf(guest);
            guests.vip.splice(index, 1);
        } else if (guests.regular.includes(guest)) {
            index = guests.regular.indexOf(guest);
            guests.regular.splice(index, 1);
        }
    }
    let countOfNotAttending = guests.vip.length + guests.regular.length;
    console.log(countOfNotAttending);
    for (const key in guests) {
        if (guests[key].length>0) {
           console.log(guests[key].join('\n')); 
        }
    }
}

// solve(['7IK9Yo0h',
//     '9NoBUajQ',
//     'Ce8vwPmE',
//     'SVQXQCbc',
//     'tSzE5t0p',
//     'PARTY',
//     '9NoBUajQ',
//     'Ce8vwPmE',
//     'SVQXQCbc'
// ])

solve(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
])