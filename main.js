"use strict";

const apresentar = document.querySelector(".apresentaNotas");
const calcular = document.getElementById("CalcularButton");
const resultadoFinal = document.querySelector(".situacao");
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const resultadoIMC = document.querySelector(".resultadoICM");

const calcMedia = function (nota1, nota2) {
  return (nota1 + nota2) / 2;
};

calcular.addEventListener("click", function () {
  const nome = document.getElementById("Nome").value;
  const matricula = document.getElementById("Matricula").value;
  const n1 = parseFloat(document.getElementById("N1").value);
  const n2 = parseFloat(document.getElementById("N2").value);

  apresentar.classList.remove("hidden");

  apresentar.textContent = `O aluno ${nome}, matrícula ${matricula}, obteve a média final ${calcMedia(
    n1,
    n2
  )}.`;

  if (calcMedia(n1, n2) >= 6) {
    resultadoFinal.textContent = `Resultado final: Aprovado`;
  } else {
    resultadoFinal.textContent = `Resultado final: Reprovado`;
  }
});

button1.addEventListener("click", function () {
  const numeroTelefone = document.querySelector(".numeroTelefone").value;
  if (numeroTelefone.length === 9) {
    resultadoFinal.textContent = "Resultado do teste: true";
  } else {
    resultadoFinal.textContent = "Resultado do teste: false";
  }
});

button2.addEventListener("click", function () {
  const altura = parseFloat(document.querySelector(".altura").value);
  const peso = parseFloat(document.querySelector(".peso").value);

  const imc = peso / Math.pow(altura, 2);
  const resultadoFormatado = imc.toFixed(2);

  resultadoIMC.textContent = `Resultado IMC: ${resultadoFormatado}`;
});
