
const ageString= window.prompt("escreva 10 idades diferentes, separadas por vírgula (,)","1,4,5,15,21,35,23,23,12,56");
const ages = ageString.split(",").map(age => Number(age));
const agesAbove18 = ages.filter(age => age > 18);

console.log(agesAbove18);
