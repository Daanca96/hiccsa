function vacas(area,dias,planta){
    if(area.length != 0){
        if(dias > 0){
        var forraje = 6*area;
        hablar2("La cantidad maxima recomendada de vacas, es de: "+gasto(area,dias)+" en un area de: "+area+" metros cuadrados la cual deberia producir una cantidad de: "+formatoKG(forraje,true)+
                " de forraje("+planta+") en "+dias+" dias");
        swal("La cantidad maxima recomendada de vacas, es de: "+gasto(area,dias)+" en un area de: "+area+"m² la cual deberia producir una cantidad de: "+formatoKG(forraje,true)+
                " de forraje("+planta+") en "+dias+" dias");
        }else
            swal("El tipo de pasto: "+planta+" no crese en esa temporada");
    }else{
        hablar2("Ingrese por favor un numero");
        swal("Ingrese por favor un numero");
    }
} 

/*
function diasCo(cantidad,gasto){ 
    return cantidad/gasto;
}*/
var vacas_reco ;

function gasto(area,dias){
    var a =area/8.333;/* 8.333 area aproximada de produccion de comida para una vaca de aprimadamente de 450kg */
    console.log("La cantidad de vacas es de: "+parseInt(a/dias));
    vacas_reco = parseInt(a/dias);
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
            hablar2("Seleccione un piso termico y el tipo de pasto");
            swal("Seleccione un piso termico y el tipo de pasto");
            break;
            
        case '2':
            vacas(area,mucho(calido,planta,temporada),planta);
            break;
            
        case '3':
            vacas(area,mucho(templado,planta,temporada),planta);
            break;
            
        case '4':
            vacas(area,mucho(frio,planta,temporada),planta);
            break;
    }
}

 function mucho(arreglo, planta, temporada){
    var salida = 0;
    for(i = 0;i < arreglo.length;i++){
        if(planta === arreglo[i].nombre){
            if(temporada === 'Invierno')
                salida = arreglo[i].Invierno;
            else
                if(0 === arreglo[i].Verano)
                    salida = -1;
            else
                if(arreglo[i].mas){
                    salida = arreglo[i].Verano;
                    break;
                }
        }
    }
    console.log("es: "+salida);
    return salida;
}