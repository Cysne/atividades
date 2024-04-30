//9. Escreva um algoritmo que leia o código de origem de um produto e imprima a região
//do mesmo, conforme a tabela abaixo:
// 1. sul | 5 ou 6 nordeste
// 2. norte | 7, 8 ou 9 sudeste
// 3. leste |10 até 20 centro-oeste
// 4. oeste | 25 até 50 nordeste
// fora dos intervalos - produto importado

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function origem() {
    rl.question('Digite o código de origem do produto: ', (codigo) => {
        let codigo_array = codigo.split(' ').map(parseFloat);
        if (codigo_array.length !== 1 || isNaN(codigo_array[0])) {
            console.log('Favor digite somente o código de origem válido.');
            origem();
        } else {
            let origem = codigo_array[0];
            let regiao = '';
            if (origem === 1) {
                regiao = 'Sul';
            } else if (origem === 2) {
                regiao = 'Norte';
            } else if (origem === 3) {
                regiao = 'Leste';
            } else if (origem === 4) {
                regiao = 'Oeste';
            } else if (origem >= 5 && origem <= 6) {
                regiao = 'Nordeste';
            } else if (origem >= 7 && origem <= 9) {
                regiao = 'Sudeste';
            } else if (origem >= 10 && origem <= 20) {
                regiao = 'Centro-Oeste';
            } else if (origem >= 25 && origem <= 50) {
                regiao = 'Nordeste';
            } else {
                regiao = 'Produto importado';
            }
            console.log(`A região do produto é ${regiao}`);
            rl.close();
        }
    }
    );}

origem();