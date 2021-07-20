$(document).ready(function () {
  if (window.location.href.indexOf("index") > -1) {
    //Solo para la página index
    //Slider
    $(".bxslider").bxSlider({
      mode: "fade",
      captions: true,
      slideWidth: 2000,
      pager: true,
    });
  }
  //Post

  if (window.location.href.indexOf("index") > -1) {
    //Solo para la página index

    var posts = [
      {
        title: "Título 1",
        date:
          "Publicado el día " +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del año " +
          moment().format("YYYY"),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend purus purus, in facilisis massa scelerisque ut. Ut non     placerat mauris. Ut in ligula massa. Morbi a diam viverra nisl luctus     blandit id vitae libero. Orci varius natoque penatibus et magnis",
      },
      {
        title: "Título 2",
        date:
          "Publicado el día " +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del año " +
          moment().format("YYYY"),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend purus purus, in facilisis massa scelerisque ut. Ut non     placerat mauris. Ut in ligula massa. Morbi a diam viverra nisl luctus     blandit id vitae libero. Orci varius natoque penatibus et magnis",
      },
      {
        title: "Título 3",
        date:
          "Publicado el día " +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del año " +
          moment().format("YYYY"),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend purus purus, in facilisis massa scelerisque ut. Ut non     placerat mauris. Ut in ligula massa. Morbi a diam viverra nisl luctus     blandit id vitae libero. Orci varius natoque penatibus et magnis",
      },
      {
        title: "Título 4",
        date:
          "Publicado el día " +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del año " +
          moment().format("YYYY"),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend purus purus, in facilisis massa scelerisque ut. Ut non     placerat mauris. Ut in ligula massa. Morbi a diam viverra nisl luctus     blandit id vitae libero. Orci varius natoque penatibus et magnis",
      },
      {
        title: "Título 5",
        date:
          "Publicado el día " +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del año " +
          moment().format("YYYY"),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend purus purus, in facilisis massa scelerisque ut. Ut non     placerat mauris. Ut in ligula massa. Morbi a diam viverra nisl luctus     blandit id vitae libero. Orci varius natoque penatibus et magnis",
      },
    ];
    posts.forEach((item, index) => {
      var post = `
    <article class="articulos">
            <p class="tituloArticulo">${item.title}</p>
            <div id="comentarios">92 Comentarios</div>
            <div class="clearfix"></div>

            <p class="fecha">${item.date}</p>
            <p>
            ${item.content}
            </p>
            <a href="#" class="button-more">Leer más</a>
          </article>
    
    
    `;

      $("#posts").append(post);
    });
  }

  /*Cambiar color de tema*/

  var theme = $("#theme");

  $("#to-red").on("click", function () {
    theme.attr("href", "css/red.css");
  });

  $("#to-green").on("click", function () {
    theme.attr("href", "css/green.css");
  });

  $("#to-blue").on("click", function () {
    theme.attr("href", "css/blue.css");
  });

  //Scroll arriba de la web

  $(".subir").on("click", function (e) {
    e.preventDefault();

    $("html,body").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });

  //Login falso

  $("#login form").submit(function () {
    var form_name = $("#form_name").val();
    localStorage.setItem("form_name", form_name);
  });

  var form_name = localStorage.getItem("form_name");
  if (form_name != null && form_name != undefined) {
    var sidebar_p = $("#sidebar p");
    sidebar_p.html("<br><strong>Bienvenido, " + form_name + "</strong>");
    sidebar_p.append("<a href='#' id='logout'>Cerrar sesión</a>");
    $("#login form").hide();
  }

  $("#logout").on("click", function () {
    localStorage.clear();
    location.reload();
  });

  //Acordeón
  if (window.location.href.indexOf("about") > -1) {
    $("#acordeon").accordion();
  }

  //Reloj
  if (window.location.href.indexOf("reloj") > -1) {
    setInterval(function () {
      var reloj = moment().format("hh:mm:ss");
      $("#reloj").text(reloj);
    }, 1000);
  }

  //Validación de formulario
  if (window.location.href.indexOf("contact") > -1) {
    $("form input[name='date']").datepicker({
      dateFormat: "dd-mm-yy",
    });
    $.validate({
      lang: "es",
      errorMessagePosition: "top",
      scrollToTopOnError: true,
    });
  }
});
