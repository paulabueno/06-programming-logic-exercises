const height = prompt("Entre com a altura do triângulo:");
let triangle = "";

for (let i = 1; i <= height; i++) {
  for (let j = 1; j <= i; j++) {
    triangle += "*";
  }
  triangle += "\n";
}

console.log(triangle);