"use strict"

$(document).ready(function(){

    console.log($("a").length);//Saber la cantidad de a

   reloadLinks();


    $("#add_button").on("click",function(){
        $("#menu").append('<li><a href="'+$("#add_link").val()+'"></a></li>');//Añadir enlaces
        $("#add_link").val('');
        reloadLinks();
    });
/*Más métodos:
    -html(): Incrusta el texto    
    -prepend():Añade el texto al principio
    -prepend():Añade el texto al final
    -before():Añade el texto a un nivel anterior
    -after():Añade el texto a un nivel posterior
*/
});  

function reloadLinks(){
    $('a').each(function(index){//Recorrer todas las a
        var that=$(this);
        var enlace=that.attr("href");

        that.attr("target","_blank");//Añadir atributos o modificarlos
        that.removeAttr()
        if(enlace[0]!="/")
        {
        that.text(enlace);}

        console.log(that);
}); 
}