
let array = [10, 20, 30, 40, 50];
function arrayToList(array) {
    let list = {};

    let i = array.length - 1;
    list = {value: array[i], rest: null};
    

    for(i--; i >= 0; i--){
        list = {value: array[i], rest: list}; 
    }
    return list;
}

function listToArray(list) {
    let array = [];
    for(let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

function prepend(newvalue, list) {
    list = {value: newvalue, rest: list};
    return list;
}

function nth(list, index) {
    if(index == 0) {
        return list.value;
    }
    return nth(list.rest, index - 1);
}

console.log(nth(arrayToList(array), 2));
