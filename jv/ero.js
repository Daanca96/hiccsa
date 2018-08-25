
/*function vacas(area){
    if(area.length > 0){
        var forraje = 6*area;   //6 cantidad de forraje q produce un m2
        hablar("La cantidad maxima recomendada de vacas es de: "+gasto(area)+" en un area de: "+area+"m² la cual deberia producir una cantidad de: "+formatoKG(forraje,true)+" de forraje cada 35 Días");
        swal("La cantidad maxima recomendada de vacas, es de: "+gasto(area)+" en un area de: "+area+"m² la cual deberia producir una cantidad de: "+formatoKG(forraje,true)+" de forraje cada 35 Días");        
    }else{
        hablar("Ingrese por favor un numero");
        swal("Ingrese por favor un numero");
    }
} */


function vacas(area,dias,planta){
    if(area.length != 0){
        if(dias > 0){
        var forraje = 6*area;
        hablar("La cantidad maxima recomendada de vacas, es de: "+gasto(area,dias)+" en un area de: "+area+" m² la cual deberia producir una cantidad de: "+formatoKG(forraje,true)+
                " de forraje("+planta+") en "+dias+" dias");
        swal("La cantidad maxima recomendada de vacas, es de: "+gasto(area,dias)+" en un area de: "+area+"m² la cual deberia producir una cantidad de: "+formatoKG(forraje,true)+
                " de forraje("+planta+") en "+dias+" dias");
        }else
            swal("El tipo de pasto: "+planta+" no crese en esa temporada");
    }else{
        hablar("Ingrese por favor un numero");
        swal("Ingrese por favor un numero");
    }
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

function calcular_erosion(area,vacas){
   if(area.length != 0 && vacas.length != 0){

  if(gasto(area) < vacas){
    hablar("El suelo es propenso a Erosión por Posada de vaca, " + vacas_reco);
    swal("Suelo propenso a sufrir Erosiónes "+vacas_reco);
  }else{
    hablar("el suelo no esta propenso a tener una Erosión");
    swal("el suelo no esta propenso a tener una Erosión");
   }
}else{
    hablar("ingrese los datos por favor")
   swal("ingrese los datos por favor");
}
}
var vacas_reco ;
/*function gasto(area){
    var a =area/8.333;   8.333 area aproximada de produccion de comida para una vaca de aprimadamente de 450kg 
    console.log("La cantidad de vacas es de: "+parseInt(a/30));
    vacas_reco = "cantidad recomendada de vacas de un peso aproximado de 450kg en esta area es de: " + parseInt(a/30);
    return parseInt(a/30);
} */

function gasto(area,dias){
    var a =area/8.333;/* 8.333 area aproximada de produccion de comida para una vaca de aprimadamente de 450kg */
    console.log("La cantidad de vacas es de: "+parseInt(a/30));
    vacas_reco = "cantidad recomendada de vacas de un peso aproximado de 450kg en esta area es de: " + parseInt(a/30);
    return parseInt(a/dias);
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
    var x = getRandomInt(0,18);
    hablar(arreglo[x]);
    if (isMobile.mobilecheck() == true){
        swal(arreglo[x]);
    }else{
    Push.create("Consejo",{
    body:arreglo[x],
    icon:"img/logo2.ico",
    timeout: 9000,
    onclick: function(){
    this.close();

  }
});
}
}

function consejo_h(){
    var x = getRandomInt(0,18);

    hablar(arreglo[x]);
    swal(arreglo[x]);

}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var arreglo = ['Recuerda rotar los cultivos periodicamente',
               'Recuerda rotar el ganado entre los diferentes segmentos de pasto',
               'Recuerda revisar el estado del terreno frecuentemente en busca de posible erosion en la superficie',
               'Recuerda gestionar el uso de plaguicidad y herbicidas correctamente',
               'Evita el uso de plaguicidas y herbicidas cerca de fuentes hidricas',
               'Ten el número de teléfono de su veterinario a la mano en caso de emergencia.',
               'Los toros y vacas con crías pueden ser peligrosos.',
               'El estrés aumenta en los bovinos durante el invierno por las dificultades para dormir, la falta de poderse echar en la noche y por la cantidad de barro. Eso hace que bajen las defensas y el peso',
               'fincas encharcadas, se hacen frecuentes las enfermedades podales, y los animales no se pueden acostar, ni alimentar bien.',
               'alimentos como el silo de maíz, los subproductos como las harinas de arroz o de maíz, los residuos de panadería o el glicerol representan aportes significativos a los animales',
               'Haz que el ternero reciba sus vacunas de antibióticos disponibles en las tiendas de comida para animales',
               'Los terneros deben alimentarse siguiendo un horario controlado de 3 a 5 comidas pequeñas al día.',
               'Esteriliza el equipo y límpialo bien luego de cada uso. Las bacterias pueden desarrollarse en los residuos de calostro y leche en los biberones, lo que puede enfermar gravemente al ternero.',
               'La inseminación artificial solo tiene 60 a 70% de éxito. Cuanto más sea la tecnología que utilices mas éxito tendrás.',
               'Permite que la lactancia de la vaca dure 10 meses al año. Esto es para que le des dos meses libres antes de del parto',
               'una vaca puede ponerse un poco sobre protectora con su cría luego de haber dado a luz, así que ten mucho cuidado.',
               'No mantengas ningún becerro de tus primeras novillas de primer parto. No son tan buenos becerros como los del segundo parto en adelante.',
               'Evita tener un semental lo menos posible. La inseminación fue inventada para disminuir costos y el peligro del manejo del semental.',
               'El ganado en áreas secas está en riesgo de enfermarse de neumonía o fiebre de embarque, acidosis, pie negro',
               ];


function hablar(z){
var artyom = new Artyom();
    artyom.say(z,{
    lang:"es-ES",
    });
}





//-------------------------------------------------------
function selec(valor){
    limpiar();
    switch (valor){
        case '2':
            agregar(2);
            console.log("Clima calido");
            for(i = 0;i < calido.length;i++){
            var x = document.getElementById("tipo");
            var option = document.createElement("option");
            option.text = calido[i].nombre;
            x.add(option);  
            }
            break;
        case '3':
            agregar(3);
            console.log("Clima templado");
            for(i = 0;i < templado.length;i++){
            var x = document.getElementById("tipo");
            var option = document.createElement("option");
            option.text = templado[i].nombre;
            x.add(option);  
            }
             
            break;
            
        case '4':
            console.log("Clima frio");
            agregar(4);
            for(i = 0;i < frio.length;i++){
            var x = document.getElementById("tipo");
            var option = document.createElement("option");
            option.text = frio[i].nombre;
            x.add(option);  
            }
            break;
    }
}

function limpiar(){
  var select = document.getElementById("tipo");
    while (select.length > 0) {
        select.remove(select.selectedIndex);
    }
}

function subir(nombre, invierno, verano, mas){
    var planta = new Object();
    planta.nombre = nombre;
    planta.Invierno = invierno;
    planta.Verano = verano;
    planta.mas = mas;
    return planta;
    //templado = [planta];
}

var calido = [];

var templado = [];

var frio = [];

function agregar(clima){
    console.log(clima);
    switch (clima){
        case 2:
            calido = [subir('Guinea',40,45,true), subir('Puntero, Faragua, Yaraguá, Uribe', 38, 80, false), subir('Angleton', 40, 60, false), subir('Braquiaria', 40,45, true),
                      subir('Buffel', 35, 65, false), subir('Estrella', 46, 0, false), subir('Pangola', 37, 0, false), subir('Gordura', 45, 45, true), subir('Alemán', 45,45, true),
                      subir('Pará', 37, 42, true), subir('Elefante', 50, 0, false), subir('King Grass', 45,0,false), subir('Guatemala', 42,84,false), subir('Calopo', 45,0,false), 
                      subir('Clitoria o campanilla', 40,60,false), subir('Pega pega', 37,60,), subir('Soya perenne', 37,0,false), subir('Kudzu tropical', 60, 120, false)];
            break;
            
        case 3:
            templado = [subir('Micay', 72, 72, true)];
            break;
            
        case 4:
            frio = [subir('Raigrases anuales', 32, 40, true), subir('Raigrases perennes', 35,40,true), subir('Azul Orchoro', 38, 0, false), subir('Festuca alta', 28, 42, false), 
                    subir('Festuca media', 37, 0, false), subir('Kikuyo', 42, 63, false)];
             break;
    }
}


//---------------------------------nuevo  25 / 08 / 2018
function recupera(temporada,planta,clima,area){
    var salida = 0;
    
    switch(clima){
        case '1':
            hablar("Seleccione un piso termico y el tipo de pasto");
            swal("Seleccione un piso termico y el tipo de pasto");
            break;
            
        case '2':
            vacas(area,hot(planta,temporada),planta);
            break;
            
        case '3':
            vacas(area,med(planta,temporada),planta);
            break;
            
        case '4':
            vacas(area,fri(planta,temporada),planta);
            break;
    }
}


 function hot(planta, temporada){
    var salida = 0;
    for(i = 0;i < calido.length;i++){
        
                if(planta === calido[i].nombre && temporada === 'Invierno')
                        salida = calido[i].Invierno;
                else    /* else de temporada de invierno */
                    if(planta === calido[i].nombre && calido[i].Verano === 0)
                        salida = -1;
                       else /* else para saber si crece en verano */
                           if(planta === calido[i].nombre && calido[i].mas){
                         salida = calido[i].Verano;
                               break;
                           }
                           
            }
    console.log("sale: "+salida);
    return salida;    
}

function med(planta, temporada){
    var salida = 0;
    for(i = 0;i < templado.length;i++){
        
                if(planta === templado[i].nombre && temporada === 'Invierno')
                        salida = templado[i].Invierno;
                else    /* else de temporada de invierno */
                    if(planta === templado[i].nombre && templado[i].Verano === 0)
                        salida = -1;
                       else /* else para saber si crece en verano */
                           if(planta === templado[i].nombre && templado[i].mas){
                         salida = templado[i].Verano;
                               break;
                           }
                           
            }
    return salida;
}

function fri(planta, temporada){
    var salida = 0;
    for(i = 0;i < frio.length;i++){
        
                if(planta === frio[i].nombre && temporada === 'Invierno')
                        salida = frio[i].Invierno;
                else    /* else de temporada de invierno */
                    if(planta === frio[i].nombre && frio[i].Verano === 0)
                        salida = -1;
                       else /* else para saber si crece en verano */
                           if(planta === frio[i].nombre && frio[i].mas){
                         salida = frio[i].Verano;
                               break;
                           }
                           
            }
    return salida;
}

//es telefono?
var isMobile = {
mobilecheck : function() {
return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent||navigator.vendor||window.opera)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent||navigator.vendor||window.opera).substr(0,4)))
}
}
