const button = document.querySelector("botao");
button.addEventListener('keypress', function(event){
    if(event.keyCode === "Enter"){
        function calcular(){
            var peso = document.querySelector("#peso").value;
            var altura = document.querySelector("#altura").value;
            var resultado = peso / (altura * 2);
            var resulttxt = document.querySelector("#result").innerHTML = `Resultado = ${resultado.toFixed(2)} IMC`;
            var pesoIdeal = document.querySelector("#ideal");
            if(resultado.toFixed(2) >= 40){
                pesoIdeal.innerHTML = `Obesidade grau 3.`;
            }else if(resultado.toFixed(2) >= 35 && resultado.toFixed(2) <= 39.9){
                pesoIdeal.innerHTML = `Obesidade grau 2.`;
            }
            else if(resultado.toFixed(2) >= 30 && resultado.toFixed(2) <= 34.9){
                pesoIdeal.innerHTML = `Obesidade grau 1. Sinal de alerta!`;
            }
            else if(resultado.toFixed(2) >= 25 && resultado.toFixed(2) <= 29.9){
                pesoIdeal.innerHTML = `Sobrepeso.`;
            }
            else if(resultado.toFixed(2) >= 18.6 && resultado.toFixed(2) <= 24.9){
                pesoIdeal.innerHTML = `Normal.`;
            }
            else if(resultado.toFixed(2) === 18.5 || resultado.toFixed(2) <= 18.5){
                pesoIdeal.innerHTML = `Abaixo do normal.`;
            }
        }
    }
})
function calcular(){
    var peso = document.querySelector("#peso").value;
    var altura = document.querySelector("#altura").value;
    var resultado = peso / (altura * 2);
    var resulttxt = document.querySelector("#result").innerHTML = `Resultado = ${resultado.toFixed(2)} IMC`;
    var pesoIdeal = document.querySelector("#ideal");
    if(resultado.toFixed(2) >= 40){
        pesoIdeal.innerHTML = `Obesidade grau 3.`;
    }else if(resultado.toFixed(2) >= 35 && resultado.toFixed(2) <= 39.9){
        pesoIdeal.innerHTML = `Obesidade grau 2.`;
    }
    else if(resultado.toFixed(2) >= 30 && resultado.toFixed(2) <= 34.9){
        pesoIdeal.innerHTML = `Obesidade grau 1. Sinal de alerta!`;
    }
    else if(resultado.toFixed(2) >= 25 && resultado.toFixed(2) <= 29.9){
        pesoIdeal.innerHTML = `Sobrepeso.`;
    }
    else if(resultado.toFixed(2) >= 18.6 && resultado.toFixed(2) <= 24.9){
        pesoIdeal.innerHTML = `Normal.`;
    }
    else if(resultado.toFixed(2) === 18.5 || resultado.toFixed(2) <= 18.5){
        pesoIdeal.innerHTML = `Abaixo do normal.`;
    }
}



//Acima de 40,0. Obesidade. grau III. ...
//Entre 35,0 e 39,9. Obesidade. grau II. ...
//Entre 30,0 e 34,9. Obesidade grau I. Sinal de alerta! ...
//Entre 25,0 e 29,9. Sobrepeso. ...
//Entre 18,6 e 24,9. Normal. ...
//18,5 ou menos. Abaixo do normal.