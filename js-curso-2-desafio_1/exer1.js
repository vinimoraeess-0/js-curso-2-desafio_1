//exer 1
let peso = parseFloat(prompt("informe seu peso em gramas"));
let altura = parseFloat(prompt("informe sua altura em metros"));
let imc;
function calculoIMC(parPeso, parAltura) {
   return parPeso/(parAltura*parAltura);
}
imc = calculoIMC(peso, altura);
alert (`o valor do IMC é ${imc.toFixed(2)}`);


