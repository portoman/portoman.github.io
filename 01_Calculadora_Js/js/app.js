console.log("Aplicación Calculadora");

function sumar() {
  const forma = document.getElementById("forma");
  let operandoA = forma["operandoA"];
  let operandoB = forma["operandoB"];

  let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);

  ValorNaN(resultado);

  document.getElementById("resultado").innerHTML = resultado;
}

function restar() {
  const forma = document.getElementById("forma");
  let operandoA = forma["operandoA"];
  let operandoB = forma["operandoB"];

  let resultado = parseInt(operandoA.value) - parseInt(operandoB.value);

  ValorNaN(resultado);

  document.getElementById("resultado").innerHTML = resultado;
}

function multiplicar() {
  const forma = document.getElementById("forma");
  let operandoA = forma["operandoA"];
  let operandoB = forma["operandoB"];

  let resultado = parseInt(operandoA.value) * parseInt(operandoB.value);

  ValorNaN(resultado);

  document.getElementById("resultado").innerHTML = resultado;
}

function dividir() {
  const forma = document.getElementById("forma");
  let operandoA = forma["operandoA"];
  let operandoB = forma["operandoB"];

  let resultado_ = parseInt(operandoA.value) / parseInt(operandoB.value);

  let resultado=resultado_.toFixed(2);

  ValorNaN(resultado);

  document.getElementById("resultado").innerHTML = resultado;
}

function azul(titulo) {
  titulo.style.color = "blue";
}

function ValorNaN(_resultado) {
  if (isNaN(_resultado)) {
    _resultado = "Números no introducidos";
  }
}

var arrayOpA = [];
var arrayOpB = [];

var interruptorA=false;
var interruptorB=false;

function activarA(){
  interruptorA=true;
  interruptorB=false;
};

function activarB(){
  interruptorB=true;
  interruptorA=false;
}


function anadir(valor) {
  if (interruptorA) {
    arrayOpA.push(valor);
    var valor_A = arrayOpA.join("");
    document.getElementById("operandoA").value = valor_A;
  }
  
  if (interruptorB) {
    arrayOpB.push(valor);
    var valor_B = arrayOpB.join("");
    document.getElementById("operandoB").value = valor_B;
  }
}

function anadir1() {
  var valor = 1;
  anadir(valor);
}

function anadir2() {
  var valor = 2;
  anadir(valor);
}

function anadir3() {
  var valor = 3;
  anadir(valor);
}

function anadir4() {
  var valor = 4;
  anadir(valor);
}

function anadir5() {
  var valor = 5;
  anadir(valor);
}

function anadir6() {
  var valor = 6;
  anadir(valor);
}

function anadir7() {
  var valor = 7;
  anadir(valor);
}

function anadir8() {
  var valor = 8;
  anadir(valor);
}
function anadir9() {
  var valor = 9;
  anadir(valor);
}

function borrar() {
  if(interruptorA){
    arrayOpA.pop();
    var valor = arrayOpA.join("");
    document.getElementById("operandoA").value = valor;
  }
  if(interruptorB){
    arrayOpB.pop();
    var valor = arrayOpB.join("");
    document.getElementById("operandoB").value = valor;
  }
  
}
