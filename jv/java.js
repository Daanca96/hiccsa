
function Cambiar(x) {
    "use strict";
    document.getElementById("HICCSA").style.display = "none";
    document.getElementById("Estudioe").style.display = "none";
    document.getElementById("Movimiento").style.display = "none";
    document.getElementById("Acerca").style.display = "none";
    document.getElementById("Controlalimentos").style.display = "none";
    //document.getElementById("Seguimientoanimal").style.display = "none";
    document.getElementById(x).style.display = "block";

    if (x=="Acerca"){
        hablar2("Desarrolladores: David Cubillos, Daniel Castro y Cristian Monrroy");
    } 
}

function hablar2(z){
var artyom = new Artyom();
    artyom.say(z,{
    lang:"es-ES",
    });
}

function hablar(x){  //ingles
    var speechSynthesisUtterance = new SpeechSynthesisUtterance(x); 
    speechSynthesisUtterance.lang = 'en-EN';
     speechSynthesisUtterance.rate = document.getElementById("rate").value; // 0.1 to 10
     speechSynthesisUtterance.volume = document.getElementById("volume").value; //0 to 2
    window.speechSynthesis.speak(speechSynthesisUtterance);
}

function check(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }

    // Patron de entrada, en este caso solo acepta numeros y letras
    patron = /[0-9]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}