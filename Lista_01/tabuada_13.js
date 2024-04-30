//13. Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
//calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
//1 x N = N
//2 x N = 2N
//3 x N = 3N

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tabuada() {
    rl.question('Digite 5 valores para N: ', (valores) => {
        let valores_array = valores.split(' ').map(parseFloat);
        if (valores_array.length !== 5 || valores_array.some(isNaN)) {
            console.log('Favor digite somente 5 valores válidos.');
            tabuada();
        } else {
            for (let i = 0; i < valores_array.length; i++) {
                for (let j = 1; j <= valores_array[i]; j++) {
                    console.log(`${j} x ${valores_array[i]} = ${j * valores_array[i]}`);
                }
            }
            rl.close();
        }
    }
    );}

tabuada();