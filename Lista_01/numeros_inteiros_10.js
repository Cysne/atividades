//10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function Numbers() {
    rl.question('Digite um número inteiro: ', (numero) => {
        let num = parseInt(numero);
        if (isNaN(num)) {
            console.log('Favor digite somente um número inteiro.');
            Numbers();
        } else {
            for (let i = 0; i < 10; i++) {
                console.log(num);
            }
            rl.close();
        }
    });
}

Numbers();