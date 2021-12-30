function solve(input) {

    let movies = [];

    for (let i = 0; i < input.length; i++) {
        let info = input[i].split(' ');


        if (info.includes('addMovie')) {
            let name = info.slice(1).join(' ');
            let movie = {
                name: name
            };

            movies.push(movie)

        }else if (info.includes('directedBy')) {
            let index = info.indexOf('directedBy');
            let name = info.slice(0,index).join(' ');
            let director = info.slice(index+1).join(' ');

            for (const movie of movies) {
                if (movie.name === name) {
                    movie.director = director;
                }
            }
            
        }else if (info.includes('onDate')) {
            let index = info.indexOf('onDate');
            let name = info.slice(0, index).join(' ');
            let date = info[info.length-1];

            for (const movie of movies) {
                if (movie.name === name) {
                    movie.date = date;
                }
            }
        }
    }

    for (const movie of movies) {
        if (Object.keys(movie).length === 3) {
            console.log(JSON.stringify(movie))
        }
    }
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ])
