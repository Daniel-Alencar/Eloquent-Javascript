console.log("The future says: ", future());
function future() {
    return "We STILL have no flying cars.";
}
// isto funciona (mesmo sabendo que a função foi definida após o código)

console.log("The future says: ", newFuture());
function newFuture() {
    return "We STILL have no flying cars.";
}
// isto não funciona





function example() {
    
    function a() {
        console.log("Normal fazer esta declaração de funcão");
    }

    if(true) {
        function b() {
            console.log("Perigoso fazer esta declaração de funcão")
        }
    }

    for(var i=0; i<2; i++) {
        function c() {
            console.log("Perigoso fazer esta declaração de funcão")
        }
    }
}
