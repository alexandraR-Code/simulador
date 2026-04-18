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
function validarCampos(ingresos, egresos, monto, plazo, tasa) {

    let hayError = false;

    // LIMPIAR ERRORES Y ESTILOS
    let campos = ["Ingresos", "Egresos", "Monto", "Plazo", "Interes"];

    campos.forEach(campo => {
        document.getElementById("error" + campo).innerText = "";
    });

    document.getElementById("txtIngresos").classList.remove("error-input");
    document.getElementById("txtEgresos").classList.remove("error-input");
    document.getElementById("txtMonto").classList.remove("error-input");
    document.getElementById("txtPlazo").classList.remove("error-input");

    // VALIDACIONES

    if (isNaN(ingresos) || ingresos <= 0) {
        document.getElementById("errorIngresos").innerText = "Ingrese ingresos válidos";
        document.getElementById("txtIngresos").classList.add("error-input");
        hayError = true;
    }

    if (isNaN(egresos) || egresos < 0) {
        document.getElementById("errorEgresos").innerText = "Ingrese egresos válidos";
        document.getElementById("txtEgresos").classList.add("error-input");
        hayError = true;
    }

    if (isNaN(monto) || monto < 100 || monto > 50000) {
        document.getElementById("errorMonto").innerText = "Monto entre 100 y 50000";
        document.getElementById("txtMonto").classList.add("error-input");
        hayError = true;
    }

    if (isNaN(plazo) || plazo <= 0 || plazo > 30) {
        document.getElementById("errorPlazo").innerText = "Plazo entre 1 y 30 años";
        document.getElementById("txtPlazo").classList.add("error-input");
        hayError = true;
    }

    if (isNaN(tasa) || tasa <= 0) {
        document.getElementById("errorInteres").innerText = "Ingrese una tasa válida";
        document.getElementById("txtTasaInteres").classList.add("error-input");
        hayError = true;
    }

    return hayError;
}
function animarResultado(id) {
    let elemento = document.getElementById(id);
    elemento.classList.add("actualizado");

    setTimeout(() => {
        elemento.classList.remove("actualizado");
    }, 300);
}