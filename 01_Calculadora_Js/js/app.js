console.log("Aplicación Calculadora");

function sumar(){
    const forma=document.getElementById("forma");
    let operandoA=forma["operandoA"];
    let operandoB=forma["operandoB"];

    let resultado=parseInt(operandoA.value)+parseInt(operandoB.value);

    if(isNaN(resultado)){
        resultado="Números no introducidos"
    }
    document.getElementById("resultado").innerHTML=`Resultado: ${resultado}`;
}

function restar(){
    const forma=document.getElementById("forma");
    let operandoA=forma["operandoA"];
    let operandoB=forma["operandoB"];

    let resultado=parseInt(operandoA.value)-parseInt(operandoB.value);

    if(isNaN(resultado)){
        resultado="Números no introducidos"
    }
    document.getElementById("resultado").innerHTML=`Resultado: ${resultado}`;
}


function multiplicar(){
    const forma=document.getElementById("forma");
    let operandoA=forma["operandoA"];
    let operandoB=forma["operandoB"];

    let resultado=parseInt(operandoA.value)*parseInt(operandoB.value);

    if(isNaN(resultado)){
        resultado="Números no introducidos"
    }
    document.getElementById("resultado").innerHTML=`Resultado: ${resultado}`;
}


function dividir(){
    const forma=document.getElementById("forma");
    let operandoA=forma["operandoA"];
    let operandoB=forma["operandoB"];

    let resultado=parseInt(operandoA.value)/parseInt(operandoB.value);

    if(isNaN(resultado)){
        resultado="Números no introducidos"
    }
    document.getElementById("resultado").innerHTML=`Resultado: ${resultado}`;
}

function azul(titulo){
    titulo.style.color="blue";
}

document.getElementById("operandoA").addEventListener("focus", cambiar);
document.getElementById("operandoA").addEventListener("blur", regresar);

document.getElementById("operandoB").addEventListener("focus", cambiar);
document.getElementById("operandoB").addEventListener("blur", regresar);

function cambiar(evento){
    evento.target.style.background="gray";
}
function regresar(evento){
    evento.target.style.background="white";
}