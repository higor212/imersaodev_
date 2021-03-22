function conversor() {
    // Valor que será digitado
    let valorDigitado = document.querySelector("input#input-box").value

    //Conversão do valorDigitado
    let valorConvertido = parseFloat(valorDigitado)

    //Valor da temperatura
    const temperatura = 32

    //Cálculo
    let valorFinal = (valorConvertido - temperatura)/1.8
    let valorDecimal = valorFinal.toFixed(2)

    //Resultado
    let mostrarValor = document.querySelector("div.write")
    
    mostrarValor.innerHTML = `A temperatura em celsius é: <strong>C° ${valorDecimal}</strong>`
    if(valorDigitado.length == 0 || valorDigitado == 0) {
        mostrarValor.innerHTML = "[ERRO] Por favor digite um número válido!"
    }
}

/*Revisão 
variáveis var int - float - string
alert - parseInt - parseFloat - prompt
operações + somar * multplicar
comentário final
toFixed
*/