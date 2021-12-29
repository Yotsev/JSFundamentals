function solve(array) {
    
    array.sort().forEach(element => console.log(`${array.indexOf(element)+1}.${element}`));
}
solve(["Potatoes", "Tomatoes", "Onions", "Apples"])