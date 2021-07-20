"use strict"

$(document).ready(function(){

    //Draggable-> Mover los elementos por la página
    $(".elemento").draggable();

    //Redimensionar

    $(".elemento").resizable();


    //Seleccionar
    
    $(".lista-seleccionable").selectable();

    //Ordenar

    $(".lista-seleccionable").sortable();

    //Drop

    $("#elemento-movido").draggable();
    $("#area").droppable({
        drop:function(){
            console.log("Has soltado algo dentro de la caja");
        }
    });

    //Efectos
    $("#mostrar").on("click",function(){
        $(".caja-efectos").toggle("fade",4000);
    })

    //Más efectos: slide, slim, explode, fade, drop, fold, puff, scale, shake

    //Tooltip

    $(document).tooltip();

    //Dialog

    $("#lanzar-popup").on("click",function(){
        $("#popup").dialog();
    });
    
    //Datepicker
    $("#calendario").datepicker();

    //Tabs
    $("#pestanas").tabs();

});  
