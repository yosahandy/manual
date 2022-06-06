"use strict"
function Sumar()
{
    var n1=parseInt(document.getElementById("tfN1").value);
    var n2=parseInt(document.getElementById("tfN2").value);
    var resultado=n1+n2;

    console.log("la suma es :" +  resultado);

    document.getElementById("respuesta").innerHTML="la suma es:" + resultado;
    
}
function Restar()
{
    var n1=parseInt(document.getElementById("tfN1").value);
    var n2=parseInt(document.getElementById("tfN2").value);
    var resultado=n1-n2;

    console.log("la suma es :" +  resultado);

    document.getElementById("respuesta").innerHTML="la resta es:" + resultado;
    
}
function Multiplicar()
{
    var n1=parseInt(document.getElementById("tfN1").value);
    var n2=parseInt(document.getElementById("tfN2").value);
    var resultado=n1*n2;

    console.log("la suma es :" +  resultado);

    document.getElementById("respuesta").innerHTML="la multiplicacion es:" + resultado;
    
}
function Dividir()
{
    var n1=parseInt(document.getElementById("tfN1").value);
    var n2=parseInt(document.getElementById("tfN2").value);
    var resultado=n1/n2;

    console.log("la suma es :" +  resultado);

    document.getElementById("respuesta").innerHTML="la divicion es:" + resultado;
    
}