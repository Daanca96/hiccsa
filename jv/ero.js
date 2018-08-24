function vacas(area){
    if(area.length != 0){
        var forraje = 6*area;
        hablar("La cantidad maxima recomendada de vacas, es de: "+gasto(area)+" en un area de: "+area+"m² la cual deveria producir una cantidad de: "+formatoKG(forraje,true)+" de forraje");
        alert("La cantidad maxima recomendada de vacas, es de: "+gasto(area)+" en un area de: "+area+"m² la cual deveria producir una cantidad de: "+formatoKG(forraje,true)+" de forraje");
        
    }else
        hablar("Ingrese por favor un numero");
} 


function diasCo(cantidad,gasto){
    return cantidad/gasto;
}

function ver(Estado){
    if(Estado){
        console.log("Ver");
        document.getElementById("Calculo").style.display = "block";
    }else{
        console.log("ocultar");
        document.getElementById("Calculo").style.display = "none";  
    }
}

function gasto(area){
    var a =area/8.333;  /* 8.333 area aproximada de produccion de comida para una vaca de aprimadamente de 450kg */
    console.log("La cantidad de vacas es de: "+parseInt(a/30));
    return parseInt(a/30);
}

function formatoKG(x,e){
    var texto = '';
    if(e)
       texto = new Intl.NumberFormat("de-De").format(x)+"kg\n";  
        else
            texto = new Intl.NumberFormat("de-De").format(x);
   
    return texto;
}
//new Intl.NumberFormat("de-DE").format(number)

function concejos(){
    var x = getRandomInt(0,4);

    Push.create("Consejo",{
    body:arreglo[x],
    icon:"img/logo2.ico",
    timeout: 4000,
  onclick: function(){
    this.close();
  }
});

}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var arreglo = ['Recuerda rotar los cultivos periodicamente','Recuerda rotar el ganado entre los diferentes segmentos de pasto','Recuerda revisar el estado del terreno\n\
                 frecuentemente en busca de posible erosion en la superficie', 'Recuerda gestionar el uso de plaguicidad y herbicidas correctamente',
                    'Evita el uso de plaguicidas y herbicidas cerca de fuentes hidricas'];


function hablar(z){
var artyom = new Artyom();
    artyom.say(z,{
    lang:"es-ES",
    });
}

function calcular_erosion(area,vacas){
  if(gasto(area) < vacas){
    hablar("Suelo propenso a sufrir erosiones");
    alert("Suelo propenso a sufrir erosiones");
  }else{
    hablar("el suelo no esta propenso a tener una erosion");
    alert("el suelo no esta propenso a tener una erosion");
   }
}