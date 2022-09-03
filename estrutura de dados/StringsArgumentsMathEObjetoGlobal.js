const str = "Olá mundo!"
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.slice(4, 9));
console.log(str.indexOf("mun"));
console.log("  okay \n ".trim());

var string = "abc";
console.log(string.length);
// → 3
console.log(string.charAt(0));
// → a
console.log(string[1]);
// → b












function argumentCounter() {
    console.log('Você me deu ' + arguments.length + ' argumentos nessa função');
}
argumentCounter('tenho', 3, 'argumentos');












function randomPointOnCircle(radius) {
    var angle = Math.random() * 2 * Math.PI;
    return {x: radius * Math.cos(angle),
        y: radius * Math.sin(angle)};
}
console.log(randomPointOnCircle(2));
console.log('');










/* Isso não funciona para o node.js somente para os navegadores */
/*
let myVar = 10;
console.log("myVar" in window);
console.log(window.myVar);
*/
