
var object = {};
object['1'] = 'Value';

console.log(object[1]);
console.log('');




var foo = {unique_prop: 1}, bar = {unique_prop: 2}, object = {};
object[foo] = 'value';

console.log(foo);
console.log(bar);
console.log(object);
console.log('');
console.log(object[bar]);
console.log('');







var numero = 0.5;
Number.prototype[5] = 3;

console.log(0[5]);
console.log(0.5);
