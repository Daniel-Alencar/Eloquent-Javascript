var size = 120;
var str = "";

for(var c=0; c<size; c++) {
    if(c % 2 == 0) {
        for(var i=0; i<size; i++) {

            if(i % 2 == 0) {
                str += "#";
            } else {
                str += " ";
            }
        }
    } else {
        for(var i=0; i<size; i++) {

            if(i % 2 == 0) {
                str += " ";
            } else {
                str += "#";
            }
        }        
    }
    str += "\n";
}
console.log(str);
