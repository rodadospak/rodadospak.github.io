function guardarFirma() {
    var canvas = document.getElementById("canvas");
    var imagen = canvas.toDataURL(); // Convertir el contenido del canvas a una imagen

    // Crear un enlace temporal para descargar la imagen
    var enlace = document.createElement("a");
    enlace.href = imagen;
    enlace.download = "firma.png";
    enlace.click();
}