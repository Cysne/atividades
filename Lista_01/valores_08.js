//Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
//e escreve-los em ordem crescente.


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function valores() {
    rl.question('Digite 2 valores: ', (entrada) => {
        let valores_array = entrada.split(' ').map(parseFloat);
        if (valores_array.length !== 2 || isNaN(valores_array[0]) || isNaN(valores_array[1]) || valores_array[0] === valores_array[1]) {
            console.log('Favor digite somente 2 valores válidos e diferentes.');
            valores();
        } else {
            let num1 = valores_array[0];
            let num2 = valores_array[1];
            if (num1 < num2) {
                console.log(`Os valores em ordem crescente são: ${num1}, ${num2}`);
            } else {
                console.log(`Os valores em ordem crescente são: ${num2}, ${num1}`);
            }
            rl.close();
        }
    }
);}

valores();