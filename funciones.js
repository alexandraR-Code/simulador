//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO
function calcularDisponible(ingresos, egresos){
   let valorDisponible = 0;
   valorDisponible = ingresos - egresos;
    if(valorDisponible < 0){
        return valorDisponible;
   }
    return valorDisponible;
}
function calcularCapacidadPago (montoDisponible){
    let resultado;
    resultado = montoDisponible / 2; 
    return resultado;
}
function calcularInteresSimple(monto,tasa, plazoAnio){
    let valorInteres;
    valorInteres = plazoAnio * monto * (tasa /100);
    return valorInteres;
}