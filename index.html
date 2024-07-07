var canvas = document.getElementById('canvas');

// Asegúrate de que el lienzo tenga la misma relación de aspecto y resolución del dispositivo
function resizeCanvas() {
    var ratio = Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    canvas.getContext("2d").scale(ratio, ratio);
}

window.onresize = resizeCanvas;
resizeCanvas();

var signaturePad = new SignaturePad(canvas);

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

        // Borrar la firma actual
        signaturePad.clear();
    }
}

function borrarFirma() {
    signaturePad.clear(); // Borrar la firma actual
}
