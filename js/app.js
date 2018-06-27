$(document).ready(function () {

});

function calificar() {
    $("#test").css("display", "none");
    $("#alert").css("display", "block");
    verResultados();
}

function comenzar() {
    $(".img").css("display", "block");
    $(".tarjeta").css("display", "none");
    setTimeout(function () {
        $("#juego1").css("display", "none");
        $("#test").css("display", "block");
    }, 10000);

}

function verResultados() {

    var score = calcularAciertos();
    var txt1 = "";

    if(score >= 3){
        txt = "Felicidades has logrado <strong> "+score+" </strong> aciertos," +
            " por lo tanto se considera que tienes una buena memoria.\n";
    }else{
        txt = "Has obtenido <strong> "+score+" </strong> cantidad de aciertos," +
            " te recomendamos realizar más ejercicios como este para mejorar tu memoria.\n";
    }

    $("#alert").html("<div class=\"alert alert-primary\" role=\"alert\">\n" +
        "    <h3 class=\"alert-heading\">Resultados</h3>\n" +
        "    <p>"+txt+"</p>\n" +
        "    <hr>\n" +
        "    <p class=\"mb-0\"></p>\n" +
        "<button type=\"button\" class=\"btn btn-success\" onclick=\"verRespuestas()\">Ver Respuestas</button>"+
        "</div>");





}

function verRespuestas() {
    $("#R1").html("<span class=\"icon-checkmark\"></span>");
    $("#R2").html("<span class=\"icon-checkmark\"></span>");
    $("#R3").html("<span class=\"icon-checkmark\"></span>");
    $("#R4").html("<span class=\"icon-checkmark\"></span>");
    $("#R5").html("<span class=\"icon-checkmark\"></span>");
    $("#R6").html("<span class=\"icon-checkmark\"></span>");
    $("#alert").css("display", "none");
    $("#test").css("display", "block");
}

function calcularAciertos() {
    var score = 0;
    if ($("#R2P1").prop("checked")) score = score + 1;
    if ($("#R4P2").prop("checked")) score = score + 1;
    if ($("#R1P3").prop("checked")) score = score + 1;
    if ($("#R1P4").prop("checked")) score = score + 1;
    if ($("#R4P5").prop("checked")) score = score + 1;
    if ($("#R1P6").prop("checked")) score = score + 1;
    return score;
}