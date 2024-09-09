document.getElementById('FormularioWhatsApp').addEventListener('submit', function(e) {
    e.preventDefault(); // Evitar el comportamiento por defecto del formulario

    // Capturar los valores del formulario
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;

    // Número de teléfono con código de país (sin +), ej: 521XXXXXXXXXX para México
    var NumeroTelefono = '+50254195742'; // Reemplazar con el número de WhatsApp destino

    // Crear el mensaje que se enviará
    var MensajeWhatsApp = `Hola, soy ${nombre}. Mi email es ${email}. Mensaje: ${mensaje}`;

    // Generar la URL de WhatsApp
    var whatsappURL = `https://api.whatsapp.com/send?phone=${NumeroTelefono}&text=${encodeURIComponent(MensajeWhatsApp)}`;

    // Redirigir a la URL de WhatsApp
    window.open(whatsappURL, '_blank');
});