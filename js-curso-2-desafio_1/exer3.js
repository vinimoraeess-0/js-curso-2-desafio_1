//exer 3
let valor = parseFloat(prompt("Digite o valor para transformarmos em dólar:"));
let resultado;
let dolar = 4.80;
function calculoDolar(valor) {
    return valor/dolar;
}
resultado = calculoDolar(valor, resultado);
alert(`O valor em dólar ficou ${resultado.toFixed(2)}`);