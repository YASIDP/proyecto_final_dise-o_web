// Mostrar/ocultar submenús principales (Perros y Gatos)
document.getElementById('productos-link').addEventListener('click', function (e) {
    e.preventDefault();
    var subMenuPerros = document.querySelector('.sub-menu-perros');
    subMenuPerros.style.display = (subMenuPerros.style.display === 'block') ? 'none' : 'block';
});

// Mostrar/ocultar submenús descendentes de Perros
document.querySelector('.sub-menu-perros .sub-menu-trigger').addEventListener('click', function (e) {
    e.preventDefault();
    var subMenuPerrosDesc = document.querySelector('.sub-menu-perros-desc');
    subMenuPerrosDesc.style.display = (subMenuPerrosDesc.style.display === 'block') ? 'none' : 'block';
});

// Mostrar/ocultar submenús descendentes de Gatos
document.querySelector('.sub-menu-perros .sub-menu-trigger-gatos').addEventListener('click', function (e) {
    e.preventDefault();
    var subMenuGatosDesc = document.querySelector('.sub-menu-gatos-desc');
    subMenuGatosDesc.style.display = (subMenuGatosDesc.style.display === 'block') ? 'none' : 'block';
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
event.preventDefault(); // Evita que el formulario se envíe automáticamente

// Obtener los valores de los campos del formulario
var nombre = document.getElementById("nombre").value;
var telefono = document.getElementById("telefono").value;
var correo = document.getElementById("correo").value;

// Mostrar la alerta con los datos del usuario
alert("Apreciado " + nombre + ", hemos recibido su mensaje. Nos comunicaremos al teléfono " + telefono + " o dirección de email " + correo + " en los próximos días.");
});

document.getElementById("login-button").addEventListener("click", function() {
    window.location.href = "index.html";
});

document.getElementById("register-button").addEventListener("click", function() {
    window.location.href = "inicio_de_sesion.html";
});