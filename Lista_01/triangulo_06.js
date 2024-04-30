//6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
//formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
//Isósceles, escaleno ou eqüilátero.
//Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
//Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
//Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
//Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function triangulo() {
    rl.question('Digite os lados do triângulo: ', (lados) => {
        let lados_array = lados.split(' ').map(parseFloat);
        if (lados_array.length !== 3 || isNaN(lados_array[0]) || isNaN(lados_array[1]) || isNaN(lados_array[2])) {
            console.log('Favor digite somente os 3 lados válidos.');
            triangulo();
        } else {
            let A = lados_array[0];
            let B = lados_array[1];
            let C = lados_array[2];
            if (A < B + C && B < A + C && C < A + B) {
                if (A === B && B === C) {
                    console.log('Triângulo Equilátero');
                } else if (A === B || A === C || B === C) {
                    console.log('Triângulo Isósceles');
                } else {
                    console.log('Triângulo Escaleno');
                }
            } else {
                console.log('Os lados fornecidos não formam um triângulo');
            }
            rl.close();
        }
    }
    );}

triangulo();