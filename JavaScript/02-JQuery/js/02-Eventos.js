"use strict"

$(document).ready(function(){

    //Mouseover y mouseout-> Esta puesto en el html como se hace de una forma ya vista desde css

    var caja=$("#caja");

    /*caja.mouseover(function(){
        $(this).css("background","red");
    })

    caja.mouseout(function(){
        $(this).css("background","red");
    })*/

    //Hover
    function cambiaRojo(){
        $(this).css("background","red")
    };

        function cambiaVerde(){
            $(this).css("background","green")
        };

    caja.hover(cambiaRojo, cambiaVerde);

    //Click

    caja.on("click",function(){
        $(this).css("background","blue")
            .css("color", "white")
            .css("text-align","center")
            .css("line-height","200px");
    })

    //Doble click
    caja.on("dblclick",function(){
        $(this).css("background","violet");
    })


    //Focus y blur

    var nombre=$("#nombre");
    var datos=$("#datos");

    //Mostar contenido por html:
    //innerHtml=>text()
    //value=>val()
    //display:block=>show()

    nombre.on("focus",function(){
        $(this).css("background","blue");
    })

    nombre.on("blur",function(){
        $(this).css("background","pink");
        datos.text($(this).val()).show();
    })


    //Mousedown y mouseup

    datos.on("mousedown",function(){
        $(this).css("border-color","gray")
    })

    datos.on("mouseup",function(){
        $(this).css("border-color","black")
    })


    $(document).on("mousemove",function(){
        $("body").css("cursor","none");
        $("#sigueme").css("left",event.clientX)
                    .css("top",event.clientY);

    })


});        