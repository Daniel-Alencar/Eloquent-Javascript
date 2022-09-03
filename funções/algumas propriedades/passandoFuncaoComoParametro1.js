
// Não é preciso definir a função para passá-la como parâmetro 
const string = "Hello world";

function executar(funcao, valor) {
    funcao(valor);
}

executar(function(palavra) {
    console.log(palavra);
}, string);
