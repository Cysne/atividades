// 1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
// valor correspondente em graus Fahrenheit.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.question('Digite a temperatura em Celsius: ', (celsius) => {
    let temperatura_fahrenheit = (celsius * 9/5) + 32;
    console.log(`A temperatura em Fahrenheit é: ${temperatura_fahrenheit}`);
    rl.close();
});