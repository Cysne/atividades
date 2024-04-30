//4. Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
//calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
//aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
//aprovação).

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function notas() {
    rl.question('Digite as notas das duas avaliações: ', (nota) => {
        let notas_array = nota.split(' ').map(parseFloat);
        if (notas_array.length !== 2 || isNaN(notas_array[0]) || isNaN(notas_array[1])) {
            console.log('Favor digite somente as 2 notas válidas.');
            notas();
        } else {
            let num1 = notas_array[0];
            let num2 = notas_array[1];
            let media = (num1 + num2) / 2;
            if (media >= 6.0) {
                console.log('PARABÉNS! Você foi aprovado');
            } else {
                console.log('Você foi REPROVADO! Estude mais');
            }
            rl.close();
        }
    });
}

notas();

