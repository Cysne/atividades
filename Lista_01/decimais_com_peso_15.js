//15. Fazer um algoritmos para receber um número decimal e o peso de cada número até
//que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
//respectivos.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numeros = [];

function questionAsync(prompt) {
    return new Promise((resolve) => {
        rl.question(prompt, resolve);
    });
}

async function decimais_com_peso() {
    let entrada = '';
    while (entrada !== '0') {
        entrada = await questionAsync('Digite um número decimal ou "0" para terminar: ');
        let num = parseFloat(entrada);
        if (isNaN(num)) {
            console.log('Favor digite somente números decimais.');
        } else if (entrada !== '0') {
            let peso = await questionAsync('Digite o peso do número: ');
            let peso_num = parseFloat(peso);
            if (isNaN(peso_num)) {
                console.log('Favor digite somente números decimais.');
            } else {
                numeros.push({ num, peso: peso_num });
            }
        }
    }
    let soma_pesos = numeros.reduce((acc, cur) => acc + cur.peso, 0);
    let soma = numeros.reduce((acc, cur) => acc + cur.num * cur.peso, 0);
    let media = soma / soma_pesos;
    console.log(`A média ponderada dos números é: ${media}`);
    rl.close();
}

decimais_com_peso();