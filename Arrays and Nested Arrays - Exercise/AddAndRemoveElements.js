function solve(input){
    let arr = [];
    let number = 1;

    for (let i = 0; i < input.length; i++) {
        
        if(input[i] == 'add'){
            arr.push(number)
        }
        else{
            arr.pop();
        }
        
        number++;
    }

    if (arr.length == 0) {
        console.log('Empty');
        return;
    }
    else{
        for (const item of arr) {
            console.log(item);
        }
    }
}

solve(['add', 
'add', 
'add', 
'add']);