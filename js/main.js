$(function(){
    $("section").each(function(){ 
        var tituloSeccion = $(this).find("h2").text() 
        console.log(tituloSeccion);
        var idSeccion = $(this).attr("id");

        $("#main-menu").append('<li class="nav-item">'
            +'<a class="nav-link" href="#'+ idSeccion +'">'+ tituloSeccion +'</a>'
            +'</li>');
    })
})