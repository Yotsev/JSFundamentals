function solve(input) {
    class Song {
        constructor(list, name, time) {
            this.typeList = list;
            this.name = name;
            this.time = time;
        }
    }

    let numberOfSongs = input.shift();

    let songs = [];

    for (let i = 0; i < numberOfSongs; i++) {
        let [list, name, time] = input[i].split('_');

        let currentSong = new Song(list, name, time);

        songs.push(currentSong);
    }

    let output = songs.filter(s => s.typeList === input[input.length - 1] || input[input.length - 1] === 'all');

    output.forEach(element => {
        console.log(element.name);
    });
}
solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'])