
function range(start, end, increment) {
    let array = [];
    if(arguments.length < 3) {
        increment = 1;
    }

    if(increment < 0) {
        for(let i = start; i >= end; i = i + increment) {
            array.push(i);
        }
    } else {
        for(let i = start; i <= end; i += increment) {
            array.push(i);
        }
    }
    return array;
}

function sum(array) {
    let sum = 0;
    array.forEach(elemento => {
        sum += elemento;
    });
    return sum;
}
const indexs = [-1, -2, -3, 2, 3];







indexs.forEach(elemento => {
    console.log(range(15, 5, elemento));
});
