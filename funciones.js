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
 function calcularTotalPagar (monto, interes){
    let valorPagar;
    valorPagar  = monto + interes + 100;
    return valorPagar;
 }
 function calcularCuotaMensual(total, plazoAnio){
    let cuotaMensual;
    cuotaMensual = total /(plazoAnio * 12);
    return cuotaMensual;
 }
 function  aprobarCredito(capacidadPago, cuotaMensual){
 let estado = cuotaMensual / capacidadPago;

    if (estado <= 0.3) {
        return "APROBADO";
    } else if (estado > 0.3 && estado <= 0.5) {
        return "RIESGO";
    } else {
        return "RECHAZADO";
    }
}