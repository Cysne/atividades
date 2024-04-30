//14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
//a média aritmética desses números.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numeros = [];

function decimais() {
    rl.question('Digite um número decimal ou "0" para terminar: ', (entrada) => {
        if (entrada.toLowerCase() !== '0') {
            let num = parseFloat(entrada);
            if (isNaN(num)) {
                console.log('Favor digite somente números decimais.');
                decimais();
            } else {
                numeros.push(num);
                decimais(); // Adicione esta linha
            }
        } else {
            let soma = numeros.reduce((acc, cur) => acc + cur, 0);
            let media = soma / numeros.length;
            console.log(`A média aritmética dos números é: ${media}`);
            rl.close();
        }
    });
}

decimais();