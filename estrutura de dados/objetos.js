var day1 = {
    squirred: false,
    events: ["work", "touched tree", "pizza", "running", "television"]
};

console.log(day1.squirred);
console.log(day1.wolf);

day1.wolf = false;

console.log(day1.wolf);
console.log(day1);
console.log("\n\n");

var descriptions = {
    work: "went to work",
    "touched tree": "Touched a tree"
};

/*
Propriedades cujos nomes não são variáveis ou números válidos precisam estar entre aspas.
*/
console.log("\n\n\n");







var anObject = {
    left: 1,
    rigth:2
};
console.log(anObject.left);

delete anObject.left;
console.log(anObject.left);

console.log("left" in anObject);
console.log("rigth" in anObject);
console.log("\n\n\n");





// Arrays e strings são objetos
console.log(typeof [1, 2]);
console.log(typeof "Hello world!");










var journal = [
    {
        events: ["work", "touched tree", "pizza",
        "running", "television"],
        squirrel: false
    },
    {
        events: ["work", "touched tree", "pizza",
        "running", "television"],
        squirrel: false
    },
    {
        events: ["work", "touched tree", "pizza",
        "running", "television"],
        squirrel: true
    }
];
