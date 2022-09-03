function countBs(str) {
    
    var quantB = 0;
    for(var i=0; i<str.length; i++) {
        if(str.charAt(i) == "B") {
            quantB++;
        }
    }
    return quantB;
}

function countChar(str, char) {

    var quantChar = 0;
    for(var i=0; i<str.length; i++) {
        if(str.charAt(i) == char) {
            quantChar++;
        }
    }
    return quantChar;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4