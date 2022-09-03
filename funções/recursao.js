function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}
console.log(power(2, 3));

/*
Entretanto, há um grave problema: em implementações típicas no JavaScript, a versão recursiva é aproximadamente dez vezes mais lenta do que a variação que utiliza um laço de repetição. Percorrer um laço de repetição simples é mais rápido do que invocar uma função múltiplas vezes.

O dilema velocidade versus elegância é bastante interessante. Você pode interpretá-lo como uma forma de transição gradual entre acessibilidade para humanos e máquina. Praticamente todos os programas podem se tornar mais rápidos quando se tornam maiores e mais complexos, cabendo ao desenvolvedor decidir qual o balanço ideal entre ambos.
*/

function findSolution(target) {
    function find(start, history) {
        if(start == target) {
            return history;
        } else if (start > target) {
            return null;
        } else {
            return find(start + 5, "(" + history + " + 5)") || find(start * 3, "(" + history + " * 3)");
        }
    }
    return find(1, "1");
}

console.log(findSolution(24));
