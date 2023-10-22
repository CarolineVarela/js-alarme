// INICIANDO CONSTANTES QUE VAI USAR

const datas = new Date ();
const data = document.getElementById("data");
const relogio = document.getElementById("relogio");
const btn_ativar = document.getElementById("btn_ativar"); //botao
const btn_parar = document.getElementById("btn_parar"); //botao
const alarme_tempo = document.getElementById("alarme_tempo"); //input
const alarme_hora = document.getElementById("alarme_hora"); // label
const timer = document.getElementById("timer"); //container pai de todos

// CONF DO ALARME

const som_alarme = new Audio ("ring.mp3");
som_alarme.loop=-1;

let ts_atual = null;   // ts = time stamp
let ts_alarme = null;
let alarme_ativado = false;
let alarme_tocando= false;

btn_ativar.addEventListener("click", ()=>{
    ts_atual = Date.now();
    ts_alarme = ts_atual + (alarme_tempo.value*1000) ;
    alarme_ativado = true;
    const dt_alarme = new Date (ts_alarme);

    let horas = dt_alarme.getHours()
    horas = horas<10?"0"+horas:horas
    let minutos = dt_alarme.getMinutes()
    minutos = minutos<10?"0"+minutos:minutos
    let segundos = dt_alarme.getSeconds()
    segundos = segundos<10?"0"+segundos:segundos

    alarme_hora.innerHTML = "Hora do alarme: "+horas+":"+minutos+":"+segundos
})

btn_parar.addEventListener("click", ()=>{
    alarme_ativado = false
    alarme_tocando = false
    alarme_hora.innerHTML = "Hora do Alarme: "
    alarme_tempo.value = 0
    timer.classList.remove("alarme")
    som_alarme.pause()
    som_alarme.currentTime = 0 
})


let dia = datas.getDate()
dia = dia<10?"0"+dia:dia
let mes = datas.getMonth() + 1 
mes = mes<10?"0"+mes:mes

const data_ret = dia+"/ "+mes+"/ "+datas.getFullYear()
data.innerHTML = data_ret

const Relogio =()=>{
    const datas = new Date()

    let hora = datas.getHours()
    hora = hora<10?"0"+hora:hora
    let minuto = datas.getMinutes()
    minuto = minuto<10?"0"+minuto:minuto
    let segundo = datas.getSeconds()
    segundo = segundo<10?"0"+segundo:segundo

    const relogio_completo = hora+":"+minuto+":"+segundo
    relogio.innerHTML = relogio_completo

    if(alarme_ativado && !alarme_tocando) {
        if (datas.getTime() >= ts_alarme) {
            alarme_tocando = true
            som_alarme.play()
            timer.classList.add("alarme")
        }
    }
}

const intervalo = setInterval(Relogio, 1000)
Relogio() //não funciona se eu não chamar a função, dessa forma. não sei o pq   

/*
getDate() = dia do mês
getDay() = dia da semana (número)
getFullYear() = ano com 4 dígitos
getHours() = horas
getMiliseconds() = milisegundos
getMinutes() = minutos
getMonth() = mês
getSeconds() = segundos
getTime() = timestamp (milisegundos desde 1 / 1 / 1970, 00:00:00 UTC)
Date.now() = timestamp (milisegundos desde 1 / 1 / 1970, 00:00:00 UTC)
getTimezoneOffSet() = timezone da localidade
setDate() = define um dia do mês para data
setMonth() = define um mês para a data
setFullYear() = define um ano para a data
setHours() = define as horas
setMinutes() = define os minutos
setSeconds() = define os segundos
setMilliseconds() = define os milisegundos
toDateString() = retorna somente a data
*/