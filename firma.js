var canvas = document.getElementById('canvas');
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
