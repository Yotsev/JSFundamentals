function solve(currentStock, delivery) {

    let stock = [];

    for (let i = 0; i < currentStock.length - 1; i += 2) {
        let product = createProduct(currentStock[i], currentStock[i + 1]);

        stock.push(product);
    }

    for (let i = 0; i < delivery.length - 1; i += 2) {
        deliveryProduct = createProduct(delivery[i], delivery[i + 1]);

        let existingProduct = stock.findIndex(p => p.name === deliveryProduct.name);

        if (existingProduct === -1) {
            stock.push(deliveryProduct);
        } else {
            stock[existingProduct].qunatity += deliveryProduct.qunatity;
        }
    }

    stock.forEach(element => console.log(`${element.name} -> ${element.qunatity}`));

    function createProduct(name, prodQuantity) {
        let item = name;
        let qunatity = Number(prodQuantity)

        let product = {
            name: item,
            qunatity: Number(qunatity)
        };

        return product;
    }
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])