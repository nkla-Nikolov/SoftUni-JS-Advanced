function neededMoney(typeOfFruit, weightInGrams, pricePerKilogram){
    let totalWeight = weightInGrams / 1000       //toFixed(2) does not work here...
    let neededMoney = pricePerKilogram * totalWeight; 
    
    console.log(`I need $${neededMoney.toFixed(2)} to buy ${totalWeight.toFixed(2)} kilograms ${typeOfFruit}.`);
}

neededMoney('orange', 2500, 1.80);
neededMoney('apple', 1563, 2.35);