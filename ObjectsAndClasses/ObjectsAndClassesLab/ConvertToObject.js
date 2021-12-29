function convertorToObj(input){

    let personInfo = JSON.parse(input);

    for (const key in personInfo) {
        console.log(`${key}: ${personInfo[key]}`);
    }
}

convertor('{"name": "George", "age": 40, "town": "Sofia"}')