var canvas = document.getElementById('canvas');
var signaturePad = new SignaturePad(canvas, {
    // Habilitar soporte táctil
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
    }
}
