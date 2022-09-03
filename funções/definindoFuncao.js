var square = function(x) {
    return x*x;
};
console.log(square(12));






var makeNoise = function() {
    console.log("Pling");
}
makeNoise += "";
console.log(makeNoise)


var power = function(base, exponent) {
    var result = 1;

    for(var i=0; i<exponent; i++) {
        result *= base;
    }
    return result;
}
console.log(power(0, 0));