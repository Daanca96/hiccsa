function calcular_erosion(area,vacas){
   if(area.length != 0 && vacas.length != 0){

  if(gasto(area,30) < vacas){
    hablar("El suelo es propenso a Erosión por Posada de vaca, cantidad recomendada de vacas de un peso aproximado de 450 kilo gramos en esta area es de:  " + vacas_reco);
    swal("Suelo propenso a sufrir Erosiónes, cantidad recomendada de vacas de un peso aproximado de 450kg en esta area es de: "+vacas_reco);
  }else{
    hablar("el suelo no esta propenso a tener una Erosión");
    swal("el suelo no esta propenso a tener una Erosión");
   }
}else{
    hablar("ingrese los datos por favor")
   swal("ingrese los datos por favor");
}
}