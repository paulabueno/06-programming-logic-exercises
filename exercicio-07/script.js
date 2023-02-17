

function splitNumber(target) {
    target = window.prompt("Digite um número inteiro:", "5");
    let even = [];
    let odd = [];

    for (i = 0; i <= target; i++) {
        if (i % 2 == 0) {
            even.push(i)
        }

        else {
            odd.push(i)
        }
    }
    console.log(`Estes são números pares: ${even} estes são números impares: ${odd} `)
}

splitNumber();
