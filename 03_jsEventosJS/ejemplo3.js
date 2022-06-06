"use strict"
const btnSumar = document.getElementById("Sumar");
btnSumar.addEventListener("click",function()
{
    var n1=parseInt(document.getElementById("tfN1").value);
    var n2=parseInt(document.getElementById("tfN2").value);
    var resultado=n1+n2;

    console.log("la suma es :" +  resultado);

    document.getElementById("respuesta").innerHTML="la suma es:" + resultado;
});

const btnRestar = document.getElementById("Restar");
btnRestar.addEventListener("click",function()
{
    var n1=parseInt(document.getElementById("tfN1").value);
    var n2=parseInt(document.getElementById("tfN2").value);
    var resultado=n1-n2;

    console.log("la suma es :" +  resultado);

    document.getElementById("respuesta").innerHTML="la resta es:" + resultado;
});

const btnDividir = document.getElementById("Dividir");
btnDividir.addEventListener("click",function()
{
    var n1=parseInt(document.getElementById("tfN1").value);
    var n2=parseInt(document.getElementById("tfN2").value);
    var resultado=n1/n2;

    console.log("la suma es :" +  resultado);

    document.getElementById("respuesta").innerHTML="la divicion es:" + resultado;
});

const btnMulti = document.getElementById("Multi");
btnMulti.addEventListener("click",function()
{
    var n1=parseInt(document.getElementById("tfN1").value);
    var n2=parseInt(document.getElementById("tfN2").value);
    var resultado=n1*n2;

    console.log("la suma es :" +  resultado);

    document.getElementById("respuesta").innerHTML="la multiplicacion es:" + resultado;
});


    

    
    

