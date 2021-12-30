function solve(input) {

    let storage = new Map();
    for (let i = 0; i < input.length; i++) {

        let [product, quantityText] = input[i].split(' ');
        let quantity = Number(quantityText);

        if (storage.has(product)) {
            quantity += storage.get(product);
        }
        storage.set(product,quantity);
    }

    storage.forEach((value, key) => console.log(`${key} -> ${value}`));
}

solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])