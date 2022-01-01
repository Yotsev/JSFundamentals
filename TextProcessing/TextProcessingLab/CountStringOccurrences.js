function solve(input,target) {
    let cout = 0;
    
    let inputAsArray = input.split(' ');

    for (const word of inputAsArray) {
        if (word===target) {
            cout++;
        }
    }

    console.log(cout);
}

solve('This is a word and it also is a sentence',
'is')