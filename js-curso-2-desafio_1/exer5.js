//exer 5
let  numero = parseInt(prompt("digite um numero"));

function calculoTabuada(parNumero){
    for(i=1; i<=10; i++){
        let resultado = parNumero*i;
        console.log(`${parNumero} x ${i} = ${resultado}`);
    }
}
calculoTabuada(numero);


/*let numero = parseInt(prompt("digite um numero"))
let contador = 1

while (contador < 11){
    let resultado = contaNumero(numero)
    function contaNumero(numero){
        return numero*contador
    }
    console.log (`${numero}X${contador}=${resultado}`);
    contador++
}*/