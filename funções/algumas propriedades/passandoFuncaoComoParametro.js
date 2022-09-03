
const str = "Hello world";

function falar(palavra) {
    console.log(palavra);
}

function executar(funcao, valor) {
    funcao(valor);
}

executar(falar, str);
