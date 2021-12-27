function isSame(firstStr, character, seconmdStr){
    let word = firstStr.replace('_', character);

   let result = word === seconmdStr ? 'Matched' : 'Not Matched';

   console.log(result);
}