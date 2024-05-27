var canvas = document.getElementById('canvas');
var signaturePad = new SignaturePad(canvas, {
    onBegin: function (event) {
        if (event.type === "mousedown") {
            return;
        }
    }
});

function guardarFirma() {
    if (signaturePad.isEmpty()) {
        alert("Por favor, firma primero.");
    } else {
        var imagen = signaturePad.toDataURL(); // Convertir la firma en una imagen base64

        // Crear un enlace temporal para descargar la imagen
        var enlace = document.createElement("a");
        enlace.href = imagen;
        enlace.download = "firma.png";
        enlace.click();

        // Guardar la imagen en el almacenamiento local del navegador
        localStorage.setItem("ultimaFirma", imagen);
    }
}

// Recuperar la última firma guardada al cargar la página
window.onload = function() {
    var ultimaFirma = localStorage.getItem("ultimaFirma");
    if (ultimaFirma) {
        // Puedes hacer algo con la última firma aquí, si es necesario
    }
};
