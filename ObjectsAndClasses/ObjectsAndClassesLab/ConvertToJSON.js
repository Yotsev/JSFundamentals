function convertorToJson(firstName, lastName, hairColor){

    let person = {
        name : firstName,
        lastName : lastName,
        hairColor : hairColor
    };

    console.log(JSON.stringify(person));
}

convertorToJson('George', 'Jones', 'Brown')