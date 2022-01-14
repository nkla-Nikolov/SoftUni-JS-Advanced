function solve(input){
    input = input.toUpperCase();
    let splitter = [' ', ',', '.', '!', '?'];
    input = input.split(splitter);

    let words = [];

    for (let i = 0; i < input.length; i++) {   
        words.push(input[i]);
    }
    words.map(x.t);
    console.log(words.join(', '));
}

solve('Hi, how are you?');