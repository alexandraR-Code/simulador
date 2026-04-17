//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular(){

    let cmpIngresoFloat= document.getElementById("txtIngresos");
    let ingresos = parseFloat(cmpIngresoFloat.value);

    let cmpEngresosFloat = document.getElementById("txtEgresos");
    let egresos =parseFloat(cmpEngresosFloat.value);
    
    let valorDisponible=calcularDisponible(ingresos,egresos);
    let disponible=document.getElementById("spnDisponible");
    disponible.innerText=valorDisponible;

}