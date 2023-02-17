function tabuada(target) {
  target = window.prompt("Digite um número inteiro:", "5");

  console.log(`Tabuada de ${target}`);
  for (let i = 0; i <= 10; i++) {
    const result = target * i;
    console.log(`${target} x ${i} = ${result}`);
  }
}

tabuada(4);
