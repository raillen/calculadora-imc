const calcular = document.getElementById("calc")


function imc(){

    const nome = document.getElementById("nome").value
    const peso = parseFloat( document.getElementById("peso").value.replace(',','.') )
    const altura = parseFloat( document.getElementById("altura").value.replace(',','.') )
    const resultado = document.getElementById("result")

    if(nome && peso && altura !== null || nome && peso && altura !== undefined){
        const imc = parseFloat(( peso / (altura * altura) ).toFixed(2))
        let avaliacao = ''

        if(imc > 0 && imc < 18.5){
            avaliacao = "está abaixo do peso"
        }                   
        else if(imc > 18.5){
            avaliacao = "está com peso normal"
        }
        else if(imc >= 25){
            avaliacao = "está com sobrepeso"
        }
        else if(imc >= 30){
            avaliacao = "está com obesidade grau I"
        }
        else if(imc >= 35){
            avaliacao = "está com obesidade severa"
        }
        else if(imc >= 40){
            avaliacao = "está com obesidade mórbida"
        }
        else if(imc ==! NaN || imc ==! Infinity){
            avaliacao = 'Seu imc não consta na tabela oficial'
        }
        
        resultado.textContent = `${nome}, seu IMC é ${imc} e você está ${avaliacao}!`
    }
    else{
        resultado.textContent = 'Preencha todos os campos!'
    }
}


calcular.addEventListener('click', imc)