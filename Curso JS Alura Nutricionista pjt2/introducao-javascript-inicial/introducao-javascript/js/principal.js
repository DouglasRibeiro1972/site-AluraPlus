var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = document.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = document.querySelector(".info-altura");
var altura =  tdAltura.textContent;

var tdImc = document.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;

if(peso <= 0 || peso >= 1000){
    console.log("Peso inválido");
    pesoEhValido = false;
    tdImc.textContent = "Peso Inválido";
}

if(altura <= 0 || altura >= 3){
    console.log("Altura inválida");
    alturaEhValida = false;
    tdAltura.textContent = "Altura Inválida";
}

if(pesoEhValido && alturaEhValida){
    var imc = peso / (altura*altura);
    tdImc.textContent = imc;
}

