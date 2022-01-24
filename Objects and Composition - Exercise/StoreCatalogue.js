function solve(arr){
    let products = [];

    for (let i = 0; i < arr.length; i++) {
        let productArgs = arr[i].split(' : ')
        let productName = productArgs[0];
        let price = Number(productArgs[1]);
        let product = {
            productName,
            price
        };

        products.push(product)
    }

    products.sort((a, b) => (a.productName).localeCompare(b.productName));
    
    let lastUsedChar = '';

    for (const product of products) {
        let currentChar = product.productName[0];

        if (lastUsedChar !== currentChar) {
            console.log(currentChar);
            lastUsedChar = currentChar;
        }
        
        console.log(` ${product.productName}: ${product.price}`);
    }
}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);