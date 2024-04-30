//16. Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
//Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.



let primos = [];
let i = 101;

function primos_maior_que_100() {
    while (primos.length < 50) {
        let divisores = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                divisores++;
            }
        }
        if (divisores === 2) {
            primos.push(i);
        }
        i++;
    }
    console.log(primos);
}

primos_maior_que_100();