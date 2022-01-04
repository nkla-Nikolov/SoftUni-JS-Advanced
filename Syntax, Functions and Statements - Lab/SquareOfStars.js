function GetSquare(number){
    let line = '';
    if(number == undefined){
        for(let i = 0; i < number; i++){
            for(let j = 0; j < number; j++){
                line += '* ';
            }
            console.log(line);
            line = '';
        }
    }
    else{
        for (let i = 0; i < number; i++) {
            for (let j = 0; j < number; j++) {
                line += '* '
            }
            console.log(line);
            line = '';
        }
    }
}


GetSquare();
GetSquare(1);
GetSquare(2);
GetSquare(5);

