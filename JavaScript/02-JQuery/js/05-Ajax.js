"use strict"

$(document).ready(function(){

    //Load->Petición Ajax con GET e incrustar el resultado donde queramos en el html

   // $("#datos").load("https://reqres.in/");
        
    //Get y Post

    $.get("https://reqres.in/api/users",{page:2}, function(response){
        response.data.forEach((element, index)=>{
            $("#datos").append("<p>"+element.first_name+" "+element.last_name+"</p>");
        });
    });


    $("#formulario").submit(function(e){

        e.preventDefault();

        var usuario={
            name: $('input[name="name"]').val(),
            email:$('input[name="email"]').val()
        };
    /*
        $.post($(this).attr("action"), usuario, function(response){
            console.log(response);
        }).done(function(){
            alert("Usuario añadido correctamente");
        });
*/
        

        $.ajax({
            type:'POST',
            url:$(this).attr("action"),
            data:usuario,
            beforeSend: function(){
                console.log("Enviando usuario...");
            },
            success:function(response){
                console.log(response);
            },
            error:function(){
                console.log("Ha ocurrido un error");
            },
            timeout:2000
        });

        return false;

    });

});  
