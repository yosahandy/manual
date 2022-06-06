function sumar (n1, n2)
{
    var resultado = n1 + n2;
    //console.log("la suma es:" + resultado);
    //document.getElementById("respuesta").innerHTML="<font color='blue'>la suma es :</font>"+resultado;
    return resultado;
}

function restar (n1, n2)
{
    var resultado = n1 - n2;
    return resultado;
}

function multiplicar (n1, n2)
{
    var resultado = n1 * n2;
    return resultado;
}

function mayor(n1,n2, n3)
{
    var mayor 
if (n1>n2) 
{
    if (n1>n3) 
    {
        mayor=n1;
    }
     else 
    {
        mayor=n3;
    }
}
else
{
    if (n2>n3) 
    {
        mayor=n2;
    }
     else 
    {
        mayor=n3;
    }
}
return mayor;
}

function mayor3 (n1,n2, n3)
{
    var mayor;
    if (n1>n2 && n1>n3) 
    {
    mayor=n1;
    }
     else if(n2>n3) 
    {
        mayor=n2;
    }
     else 
    {
        mayor=n3;
    }
    return mayor;
}


function arreglo()
{
    var datos=[9,8,7,10,8,9]
return datos;
}

function objeto()
{
    var alumno=
    {
        matricula:"57201000123",
        nombre:"Zapoteco",
        Edad:"19"
    }
    return alumno;
}

console.log("la suma es:" + sumar(4,5))
console.log('la suma es:' + restar (45,5))
console.log('el numero mayor es:' + mayor (3,345,5))
console.log('el numero mayor es:' + mayor3 (399,345,50))
console.log('el arreglo tiene los datos:' + arreglo ())
console.log('el objeto tiene los datos:' + objeto().matricula)