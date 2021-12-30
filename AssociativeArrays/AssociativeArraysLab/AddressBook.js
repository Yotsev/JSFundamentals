function solve(input) {
    let addresBook = new Map();

    for (let i = 0; i < input.length; i++) {

        let [name, addres] = input[i].split(':');

        addresBook.set(name, addres);
    }

    let sortedAdressBook = Array.from(addresBook.entries()).sort((a, b) => a[0].localeCompare(b[0]))

    for (const [name, addres] of sortedAdressBook) {
        console.log(`${name} -> ${addres}`);
    }
}
solve(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'])