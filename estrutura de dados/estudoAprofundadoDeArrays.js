
var todoList = [];

function rememberTo(task) {
    todoList.push(task);
}

function whatIsNext() {
    return todoList.shift();
}
function urgentlyRememberTo(task) {
todoList.unshift(task);
}

rememberTo('Acordar cedo');
rememberTo('Ritual da manhã');
rememberTo('Análise de objetivos');
rememberTo('Fazer o anki');

whatIsNext();
whatIsNext();

urgentlyRememberTo('TOMAR CAFÉ (ANTES DE ANALISAR OS OBJETIVOS)');

console.log(todoList);
console.log('');












console.log([1, 2, 3, 2, 1].indexOf(2));
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
console.log('');








var numeros = [0, 1, 2, 3, 4];
console.log(numeros.slice(2, 4));
// → [2, 3]
console.log(numeros.slice(2));
// → [2, 3, 4]
console.log(numeros);







function remove(array, index) {
    return array.slice(0, index).concat(array.slice(index + 1));
}

var letras = ["a", "b", "c", "d", "e"];

console.log(remove(letras, 2));
// → ["a", "b", "d", "e"]