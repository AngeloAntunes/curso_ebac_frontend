// 1 - Escreva uma função de multiplicação que deverá receber como argumentos dois números e retornar a multiplicação deles

let numero1: number = 5;
let numero2: number = 10;

function multiplicacao(a: number, b: number): number {
  return a * b;
}

let resultadoDaMultiplicacao = multiplicacao(numero1, numero2);
console.log(resultadoDaMultiplicacao);

// 2 - Escreva uma função de saudação que deverá receber um nome e retornar a concatenação “Olá “ + nome;

let nome: string = 'Angelo';

function saudacao(nome: string): string {
  return `Olá ${nome}`;
}

let resultadoDaSaudacao = saudacao(nome);
console.log(resultadoDaSaudacao);