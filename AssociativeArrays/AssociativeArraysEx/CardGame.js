function solve(input) {
    let players = {};
    let powers = { 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, J: 11, Q: 12, K: 13, A: 14, S: 4, H: 3, D: 2, C: 1 }
    for (const player of input) {
        let [name, ...cards] = player.split(': ').join(',').split(', ').join(',').split(',');
        if (!players.hasOwnProperty(name)) {
            players[name] = new Set();
        }

        cards.forEach(card => {
            players[name].add(card);
        });
    }

    for (const player in players) {
        let sum = 0;
        let cards = Array.from(players[player]);
        cards.forEach(c => {
            let card = c.split('');
            let type = card.pop();
            let power = card.join('');
            sum += powers[type] * powers[power];
        });

        console.log(`${player}: ${sum}`);

    }
}
solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])