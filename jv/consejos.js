function concejos(){
    var x = getRandomInt(0,18);
    hablar2(arreglo_consejo[x]);
    if (isMobile.mobilecheck() == true){
        swal(arreglo_consejo[x]);
    }else{
    Push.create("Consejo",{
    body:arreglo_consejo[x],
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
    hablar2(arreglo_consejo[x]);
    swal(arreglo_consejo[x]);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var arreglo_consejo = ['Recuerda rotar los cultivos periodicamente',
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