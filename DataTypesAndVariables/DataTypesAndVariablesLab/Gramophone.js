function rotations(band, album, song){
    let songDuration = album.length * band.length * song.length/2;

    let result = Math.ceil(songDuration/2.5);

    console.log(`The plate was rotated ${result} times.`);
}
rotations('Black Sabbath', 'Paranoid', 'War Pigs')