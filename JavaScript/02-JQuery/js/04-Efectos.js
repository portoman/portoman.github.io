"use strict"

$(document).ready(function(){


    $("#mostrar").hide();

        //Mostrar
        $("#mostrar").on("click",function(){
            $(this).hide();
            $("#ocultar").show();
            $("#caja").show('normal');
        })

        //Ocultar
        $("#ocultar").on("click",function(){
            $(this).hide();
            $("#mostrar").show();
            $("#caja").hide('fast',function(){
                console.log("Caja 1 ocultada");//Posibilidad de añadir una función callback
            });
        })

        //Fade in

        $("#mostrar2").hide();
        $("#mostrar2").on("click",function(){
            $(this).hide();
            $("#ocultar2").show();
            $("#caja2").fadeIn('normal');
        })

         //Fade out
        $("#ocultar2").on("click",function(){
            $(this).hide();
            $("#mostrar2").show();
            $("#caja2").fadeOut('fast');
        })

        //Fade to
        
        $("#mostrar3").hide();
        $("#mostrar3").on("click",function(){
            $(this).hide();
            $("#ocultar3").show();
            $("#caja3").fadeTo('slow', 0.5);
        })

        $("#ocultar3").on("click",function(){
            $(this).hide();
            $("#mostrar3").show();
            $("#caja3").fadeTo('fast',0.1);
        })

        //Abrir y cerrar en un solo botón
        $("#todoEnUno").on("click", function(){
            $("#caja3").toggle('fast');
        })


        $("#todoEnUno2").on("click", function(){
            $("#caja3").fadeToggle('fast');
        })

        $("#todoEnUno3").on("click", function(){
            $("#caja3").slideToggle('fast');
        })

        //Animación

        var caja4=$("#caja4");

        $("#derecha").on("click",function(){
            caja4.animate({marginLeft:'500px',
                            fontSize:'40px',
                            height:'100px'
                        },'slow')
                        .animate({marginTop:'100px',
                        },'slow')
                        .animate({marginLeft:'0px',
                    },'slow')
                    .animate({marginTop:'0px',
                },'slow') ;
        })

        

});  
