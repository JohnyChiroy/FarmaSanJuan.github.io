document.getElementById('FormularioWhatsApp').addEventListener('submit', function(e) {
    e.preventDefault(); // Evitar el comportamiento default del formulario

    //Variables
    var nombre = document.getElementById('nombre').value;
    var mensaje = document.getElementById('mensaje').value;

    // Número de teléfono 
    var NumeroTelefono = '+50254195742'; 

    // Crear el mensaje que se enviará
    var MensajeWhatsApp = `Hola, soy ${nombre}. Mensaje: ${mensaje}`;

    // Generar la URL de WhatsApp
    var whatsappURL = `https://api.whatsapp.com/send?phone=${NumeroTelefono}&text=${encodeURIComponent(MensajeWhatsApp)}`;

    // Redirigir a la URL de WhatsApp
    window.open(whatsappURL, '_blank');
});