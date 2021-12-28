function solve(firstChar, secondChar) {

    let bigger = (a, b) => Math.max(a.charCodeAt(), b.charCodeAt());
    let smaller = (a, b) => Math.min(a.charCodeAt(), b.charCodeAt());
    
    let smallerChar = smaller(firstChar,secondChar);
    let biggerChar = bigger(firstChar,secondChar);
    
    let result = [];

    for (let i = smallerChar + 1; i < biggerChar; i++) {
        result.push(String.fromCharCode(i));
    }

    console.log(result.join(' '));
}
solve('a', 'd')