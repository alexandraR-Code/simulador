//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
let tasaSeleccionada = null;
function calcular(){

    let cmpIngresoFloat= document.getElementById("txtIngresos");
    let ingresos = parseFloat(cmpIngresoFloat.value);

    let cmpEngresosFloat = document.getElementById("txtEgresos");
    let egresos =parseFloat(cmpEngresosFloat.value);
    
    let valorDisponible=calcularDisponible(ingresos,egresos);
    let disponible=document.getElementById("spnDisponible");
    disponible.innerText = formatearDinero(valorDisponible);

    let pago =calcularCapacidadPago(valorDisponible);
    let capacidad=document.getElementById("spnCapacidadPago");
   capacidad.innerText = formatearDinero(pago);

    let cmpMontoFloat = document.getElementById("txtMonto");
    let monto =parseFloat(cmpMontoFloat.value);

    let tasa = tasaSeleccionada;

    let cmpPlazoAnioFloat =document.getElementById("txtPlazo");
    let plazoAnio = parseInt(cmpPlazoAnioFloat.value);
    let hayError = validarCampos(ingresos, egresos, monto, plazoAnio, tasa);
    if (hayError) {
        return;
    }

    let interes = calcularInteresSimple(monto,tasa,plazoAnio);
    document.getElementById("spnInteresPagar").innerText = formatearDinero(interes);   

    let valorPagar = calcularTotalPagar(monto,interes);
    document.getElementById("spnTotalPrestamo").innerText = formatearDinero(valorPagar);

   
    let cuotaMensual = calcularCuotaMensual(valorPagar, plazoAnio);
    let cuotaFormateada = cuotaMensual.toFixed(2);
    document.getElementById("spnCuotaMensual").innerText = formatearDinero(cuotaMensual);

    let analizarCredito = aprobarCredito(valorDisponible, cuotaMensual);
    let estadoSpan = document.getElementById("spnEstadoCredito");
    estadoSpan.classList.remove("aprobado", "riesgo", "rechazado");
    estadoSpan.innerText = analizarCredito;
    if (analizarCredito === "APROBADO") {
        estadoSpan.classList.add("aprobado");
    } else if (analizarCredito === "RIESGO") {
        estadoSpan.classList.add("riesgo");
    } else {
        estadoSpan.classList.add("rechazado");
    }


    document.getElementById("spnTotalPrestamo").innerText = formatearDinero(valorPagar);
    animarResultado("spnTotalPrestamo");

    document.getElementById("btnReiniciar").addEventListener("click", reiniciar);
    
}


function reiniciar() {

    // limpiar inputs
    document.getElementById("txtIngresos").value = "";
    document.getElementById("txtEgresos").value = "";
    document.getElementById("txtMonto").value = "";
    document.getElementById("txtPlazo").value = "";

    // limpiar resultados
    document.getElementById("spnDisponible").innerText = "";
    document.getElementById("spnCapacidadPago").innerText = "";
    document.getElementById("spnInteresPagar").innerText = "";
    document.getElementById("spnTotalPrestamo").innerText = "";
    document.getElementById("spnCuotaMensual").innerText = "";
    document.getElementById("spnEstadoCredito").innerText = "Analizando...";

    // limpiar errores
    let campos = ["Ingresos", "Egresos", "Monto", "Plazo", "Interes"];
    campos.forEach(campo => {
        document.getElementById("error" + campo).innerText = "";
    });

    // quitar rojo
    document.getElementById("txtIngresos").classList.remove("error-input");
    document.getElementById("txtEgresos").classList.remove("error-input");
    document.getElementById("txtMonto").classList.remove("error-input");
    document.getElementById("txtPlazo").classList.remove("error-input");

    tasaSeleccionada = null;
    let botones = document.querySelectorAll(".opciones-interes button");
    botones.forEach(b => b.classList.remove("activo"));
}

function formatearDinero(valor) {
    return "$ " + valor.toLocaleString("es-EC", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}
function seleccionarInteres(valor, boton) {

    tasaSeleccionada = valor;

    let botones = document.querySelectorAll(".opciones-interes button");
    botones.forEach(b => b.classList.remove("activo"));

    boton.classList.add("activo");
}

