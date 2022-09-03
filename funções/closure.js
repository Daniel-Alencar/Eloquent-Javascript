function wrapValue(n) {
    var localVariable = n;

    function a() {
        return localVariable;
    }
    return a;
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);

console.log(wrap1());
console.log(wrap2());

/*
Isto é permitido e a variável ainda pode ser acessada. Várias instânicias da variável
podem coexistir (variáveis locais são realmente recriadas para cada nova chamada, sendo
que as chamadas não interferem nas variáveis locais umas das outras)
*/

function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

var twice = multiplier(2);
console.log(twice(5));

