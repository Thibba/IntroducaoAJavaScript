var titulo = document.querySelector(".titulo");
console.log(titulo.textContent);
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");
var tdImc = paciente.querySelector(".info-imc");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;
var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso >= 1000) {
  pesoEhValido = false;
  tdImc.textContent = "Peso Inválido"
}

if (altura <= 0 || altura >= 3) {
  alturaEhValida = false;
  tdImc.textContent = "Altura Inválida";
}

if (alturaEhValida && pesoEhValido) {
  var imc = parseFloat(peso) / parseFloat(altura) * parseFloat(altura);
  var tdImc = paciente.querySelector(".info-imc");
  tdImc.textContent = imc;
}
