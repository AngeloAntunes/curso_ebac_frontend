"use strict";
// 1 - Escreva uma função de multiplicação que deverá receber como argumentos dois números e retornar a multiplicação deles
let numero1 = 5;
let numero2 = 10;
function multiplicacao(a, b) {
    return a * b;
}
let resultadoDaMultiplicacao = multiplicacao(numero1, numero2);
console.log(resultadoDaMultiplicacao);
// 2 - Escreva uma função de saudação que deverá receber um nome e retornar a concatenação “Olá “ + nome;
let nome = 'Angelo';
function saudacao(nome) {
    return `Olá ${nome}`;
}
let resultadoDaSaudacao = saudacao(nome);
console.log(resultadoDaSaudacao);
