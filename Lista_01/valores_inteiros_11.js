//11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
//cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
//ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
//NEGATIVO.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function inteiros() {
    rl.question('Digite um valor inteiro: ', (valor) => {
        let num = parseInt(valor);
        if (isNaN(num)) {
            console.log('Favor digite somente um número inteiro.');
            inteiros();
        } else if (num <= 0) {
            rl.close();
        } else {
            if (num % 2 === 0) {
                console.log(`${num} é PAR`);
            } else {
                console.log(`${num} é ÍMPAR`);
            }
            inteiros();
        }
    });
}

inteiros();