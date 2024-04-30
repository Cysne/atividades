//7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
//forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
//compradas, calcule e escreva o valor total da compra.


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function macas() {
    rl.question('Digite o número de maçãs compradas: ', (macas) => {
        let macas_array = macas.split(' ').map(parseFloat);
        if (macas_array.length !== 1 || isNaN(macas_array[0])) {
            console.log('Favor digite somente a quantidade de maçãs válida.');
            macas();
        } else {
            let quantidade = macas_array[0];
            let valor = 0;
            if (quantidade < 12) {
                valor = quantidade * 0.30;
            } else {
                valor = quantidade * 0.25;
            }
            console.log(`O valor total da compra é R$ ${valor.toFixed(2)}`);
            rl.close();
        }
    });
}

macas();