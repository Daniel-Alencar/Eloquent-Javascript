// Invertendo arrays
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function reverseArray(array) {
    let newArray = [];

    array.forEach(element => {
        newArray.unshift(element);
    });
    return newArray;
}

function reverseArrayInPlace(array) {
    let aux;
    let tamanho = array.length;

    for(let i=0; i < (tamanho/2); i++) {
        aux = array[i];
        array[i] = array[tamanho - i - 1];
        array[tamanho - i - 1] = aux;
    }
    return array;
}

console.log(reverseArray(numbers));

reverseArrayInPlace(numbers);
console.log(numbers);
