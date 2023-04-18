function borrarMensaje() {
    document.getElementById("mensaje").value = "";
    document.getElementById("mensajeEscrito").innerHTML = "";
}

document.getElementById("mensaje").addEventListener("input", function() {
    var mensaje = document.getElementById("mensaje").value;
    document.getElementById("mensajeEscrito").innerHTML = mensaje;
});