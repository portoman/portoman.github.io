"use strict"

$(document).ready(function(){
    console.log("Estamos listos!!");

    //Selector de ID

    var rojo= $("#rojo").css("background","red")//Método css para modificar propiedades css
                        .css("color", "white");
    console.log(rojo);

   $("#amarillo").css("background", "yellow")
                                .css("height", "50px")
                                .css("font-size", "40px");

    $("#verde").css("background", "green")      
                .css("color", "white");   

    /*
    Forma tradicional:
    Seleccionar elemento=> document.querySelector("#amarillo")
    Añadir evento=>document.querySelector("#amarillo").addEventListener(("click", function () {
                    alert("hola has presionado el botón 3");)
    
    */



    //Selector de clase

    var miClase= $(".zebra")

    console.log(miClase);
    miClase.css("border","3px dashed black")

    $(".sinBorde").on("click", function(){//Funcion onclick en JQuery
        $(this).css("border","3px dashed black")
            .addClass("padding")//Añadiendo una clase desde un css
            .css("color","yellow");
    })

    //Selector de atributo
    $('[title="Google"]').css("background","pink");
    $('[title="Facebook"]').css("background","blue").css("color","white");


    //Otros
    //Añadir una clase a diferentes div
    $("p, a").addClass("margen-superior");


    //Método find-> Para buscar elementos, util cuando el árbol es muy grande. Aquí se podría hacer $("#caja .resaltado")
    var busqueda= $("#caja").find(".resaltado");
    console.log(busqueda);

    //Método parent-> Para subir niveles y salir de un elemento, saltando de etiquera a etiqueta
    var busqueda2= $("#caja .resaltado").parent().parent().parent();

    console.log(busqueda2);


});        