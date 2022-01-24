function solve(arr){
    let products = [];

    for (const town of arr) {
        let [townName, productName, price] = town.split(' | ');

        let product = {
            townName,
            productName,
            price: Number(price)
        }

        if (products.some(x => x.productName === productName)) {
            let existing = products.find(x => x.productName === productName);

            if (price < existing.price) {
                existing.price = price
                existing.townName = townName;
            }
            continue;
        }

        products.push(product)
    }

    for (const product of products) {
        console.log(`${product.productName} -> ${product.price} (${product.townName})`);
    }
}

solve(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000']);