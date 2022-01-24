function createSortedList(){
    let arr = [];
    let sortedList = {
        add(element){
            arr.push(element);
            arr.sort((a, b) => a - b);
        },
        remove(index){
            if(index >= 0 && index < arr.length){
                arr.splice(index, 1);
            }
            arr.sort((a, b) => a - b);
        },
        get(index){
            if(index >= 0 && index < arr.length){
                return arr[index];
            }
            arr.sort((a, b) => a - b);
        },
        get size(){
            return arr.length
        }
    };

    return sortedList;
}


let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
