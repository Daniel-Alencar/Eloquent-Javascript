var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

console.log(object1 == object2);
console.log(object1 == object3);

object1.value = 15;
console.log(object2.value);
console.log(object3.value);

/*
As variáveis object1 e object2 estão associadas ao mesmo objeto e, por isso, alterar object1 também altera o valor de object2. A variável object3 aponta para um objeto diferente, o qual inicialmente contêm as mesmas propriedades de object1 e sua existência é totalmente separada.

Quando comparamos objetos, o operador == do JavaScript irá retornar true apenas se ambos os objetos possuem exatamente o mesmo valor. Comparar objetos diferentes irá retornar false mesmo se eles tiverem conteúdos idênticos. Não existe uma operação nativa no JavaScript de "deep" comparison (comparação "profunda"), onde se verifica o conteúdo de um objeto, mas é possível escrevê-la você mesmo
*/
