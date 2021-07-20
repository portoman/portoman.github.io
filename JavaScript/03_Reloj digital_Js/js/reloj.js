const mostrarReloj=()=>{
    let fecha =new Date();
    let hr=formatoHora(fecha.getHours());
    let min=formatoHora(fecha.getMinutes());
    let seg=formatoHora(fecha.getSeconds());
    document.getElementById("hora").innerHTML=`${hr}:${min}:${seg}`;

    const meses=["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
    const dias=["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
    let diaSemana=dias[fecha.getDay()]
    let dia=fecha.getDate();
    let mes=meses[fecha.getMonth()];
    let año=fecha.getFullYear();

    let fechaTexto=`${diaSemana}, ${dia} ${mes} ${año}`;
    document.getElementById("fecha").innerHTML=fechaTexto;

    document.getElementById("contenedor").classList.toggle("animar");
}

/*Función para dar formato a la hora: Si es menor que 10, 
se la añade un cero a la izquierda para que quede un formato correcto*/
const formatoHora= (hora)=>{
    if(hora<10)
        hora="0"+hora;
        return hora;
    
}

setInterval(mostrarReloj,1000);