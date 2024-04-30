//3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
//● Some 25 ao primeiro inteiro;
//● Triplique o valor do segundo inteiro;
//● Modifique o valor do terceiro inteiro para 12% do valor original;
//● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
//dos primeiros três inteiros.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function Numbers() {
  rl.question('Digite 4 números inteiros: ', (numeros) => {
    let numeros_array = numeros.split(' ');
    if (numeros_array.length != 4) {
        console.log('Favor digite apenas 4 números inteiros!');
        Numbers();
      }else { 
    let numeros_array = numeros.split(' ');
    let num1 = parseInt(numeros_array[0]);
    let num2 = parseInt(numeros_array[1]);
    let num3 = parseInt(numeros_array[2]);
    let num4 = parseInt(numeros_array[3]);
    num1 += 25;
    num2 *= 3;
    num3 *= 0.12;
    num4 = num1 + num2 + num3;
    console.log(`Os valores aceitos foram: ${numeros}`);
    console.log(`Os valores são: ${num1}, ${num2}, ${num3}, ${num4}`);
    rl.close();
      }
  });
}

Numbers();