function cook(number, ...commandArgs){

    let num = Number(number);

    for (let i = 0; i < commandArgs.length; i++) {

        if(commandArgs[i] === 'chop'){
            num /= 2;
        }
        else if (commandArgs[i] === 'dice') {
            num = Math.sqrt(num);
        }
        else if (commandArgs[i] === 'spice') {
            num++;
        }
        else if (commandArgs[i] === 'bake') {
            num *= 3;
        }
        else if (commandArgs[i] === 'fillet') {
            num -= num * 0.20;
        }

        console.log(num);
    }
}

cook('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cook('9', 'dice', 'spice', 'chop', 'bake', 'fillet');