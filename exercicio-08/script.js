let target = window.prompt("Escreva 5 idades divididas entre virgulas e veja a média no console", "3,5,2,9,6");


let ages = target.split(",").map(Number);
let sum = 0;


    for (let i = 0; i < ages.length; i++) {
        sum += ages[i];
    }

let average = sum / ages.length;

console.log(average);
