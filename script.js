const HtmlHoras = document.getElementById("horas")
const HtmlMinutos = document.getElementById("minutos")
const HtmlSegundos = document.getElementById("segundos")

setInterval(function(){
    let tiempo = new Date()

    let horas = tiempo.getHours()
    let minutos = tiempo.getMinutes()
    let segundos = tiempo.getSeconds()
    
    if(horas<10){
        horas= "0"+horas
    }
    if(minutos<10){
        minutos= "0"+minutos
    }
    if(segundos<10){
        segundos= "0"+segundos
    }

    HtmlHoras.innerText = horas
    HtmlMinutos.innerText = minutos
    HtmlSegundos.innerText = segundos
}, 1000)