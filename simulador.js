//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular(){

    let cmpIngresoFloat= document.getElementById("txtIngresos");
    let ingresos = parseFloat(cmpIngresoFloat.value);

    let cmpEngresosFloat = document.getElementById("txtEgresos");
    let egresos =parseFloat(cmpEngresosFloat.value);
    
    
    let cmpIngresoFloat= document.getElementById("txtIngresos");
    let ingresos = parseFloat(cmpIngresoFloat.value);

    let cmpEngresosFloat = document.getElementById("txtEgresos");
    let egresos =parseFloat(cmpEngresosFloat.value);
    
    let valorDisponible=calcularDisponible(ingresos,egresos);
    let disponible=document.getElementById("spnDisponible");
    disponible.innerText=valorDisponible;

    let pago =calcularCapacidadPago(valorDisponible);
    let capacidad=document.getElementById("spnCapacidadPago");
    capacidad.innerText=pago; 

    let cmpMontoFloat = document.getElementById("txtMonto");
    let monto =parseFloat(cmpMontoFloat.value);

    let cmpTasaFloat =document.getElementById("txtTasaInteres");
    let tasa = parseInt(cmpTasaFloat.value);

    let cmpPlazoAnioFloat =document.getElementById("txtPlazo");
    let plazoAnio = parseInt(cmpPlazoAnioFloat.value);

    let interes = calcularInteresSimple(monto,tasa,plazoAnio);
    document.getElementById("spnInteresPagar").innerText= interes;  

    let valorPagar = calcularTotalPagar(monto,interes);
    document.getElementById("spnTotalPrestamo").innerText= valorPagar;

    let cuotaMensual = calcularCuotaMensual(valorPagar, plazoAnio);
    let cuotaFormateada = cuotaMensual.toFixed(2);
    document.getElementById("spnCuotaMensual").innerText = cuotaFormateada;

    let analizarCredito = aprobarCredito(valorDisponible, cuotaMensual);
    document.getElementById("spnEstadoCredito").innerText =analizarCredito;

}