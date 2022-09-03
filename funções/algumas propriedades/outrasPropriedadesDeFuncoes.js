
// Definindo um objeto com propriedade que é função
let obj1 = {
    start: function(){}
};

// Atribuindo uma função como propriedade para um objeto dinamicamente
let obj2 = {};
obj2.myFunction = function(){};

function myFunction() {
    return function(){} // Retornado uma função como resultado
}

// Funções podem possuir propriedades que podem ser atríbuidas dinamicamente
function myFunction2() {}
myFunction2.startTime = 0
