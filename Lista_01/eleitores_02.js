//2. Escreva um algoritmo para ler o número de eleitores de um município, o número de
//votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
//em relação ao total de eleitores.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.question('Digite o número de eleitores: ', (eleitores) => {
    rl.question('Digite o número de votos em branco: ', (brancos) => {
        rl.question('Digite o número de votos nulos: ', (nulos) => {
            rl.question('Digite o número de votos válidos: ', (validos) => {
                let percentual_brancos = (brancos / eleitores) * 100;
                let percentual_nulos = (nulos / eleitores) * 100;
                let percentual_validos = (validos / eleitores) * 100;
                console.log(`Percentual de votos em branco: ${percentual_brancos}%`);
                console.log(`Percentual de votos nulos: ${percentual_nulos}%`);
                console.log(`Percentual de votos válidos: ${percentual_validos}%`);
                rl.close();
            });
        });
    });
});