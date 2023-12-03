document.addEventListener('DOMContentLoaded', function() {
    const menuBtn1 = document.getElementById('menu-btn');
    const menu1 = document.getElementById('menu1');
    const interfaz1 = document.getElementById('interfaz1');
  
    menuBtn1.addEventListener('click', () => {
        event.stopPropagation();
        menu1.style.width = menu1.style.width === '22%' ? '0' : '22%';
        interfaz1.classList.toggle('closed');
    });
  
    document.addEventListener('click', function(event) {
        if (!menu1.contains(event.target)) {
            menu1.style.width = '0';
            interfaz1.classList.add('closed');
        }
    });
  });
  


function confirmarSalir() {
    var confirmacion = window.confirm("¿Estás seguro de que quieres salir?");
    if (confirmacion) {
        window.close();
    }
}



function mostrarInterfaz2() {
    document.querySelector('#interfaz1').style.display = 'none';
    document.querySelector('#interfaz2').style.display = 'block';
}
function mostrarInterfaz3() {
    document.querySelector('#interfaz1').style.display = 'none';
    document.querySelector('#interfaz3').style.display = 'block';
}
function mostrarInterfaz4() {
    document.querySelector('#interfaz1').style.display = 'none';
    document.querySelector('#interfaz4').style.display = 'block';
}
function mostrarInterfaz5() {
    document.querySelector('#interfaz1').style.display = 'none';
    document.querySelector('#interfaz5').style.display = 'block';
}
function mostrarInterfaz6() {
    document.querySelector('#interfaz1').style.display = 'none';
    document.querySelector('#interfaz6').style.display = 'block';
}
function mostrarInterfaz7() {
    document.querySelector('#interfaz1').style.display = 'none';
    document.querySelector('#interfaz7').style.display = 'block';
}
function mostrarInterfaz8() {
    document.querySelector('#interfaz1').style.display = 'none';
    document.querySelector('#interfaz8').style.display = 'block';
}
function volverInterfaz2() {
    document.querySelector('#interfaz2').style.display = 'none';
    document.querySelector('#interfaz1').style.display = 'block';
}
function mostrarPerfil(){
    document.querySelector('.botones-perfil-2').style.display = 'block';
    document.querySelector('.inputs-informacion-2').style.display = 'block';
}
function mostrarMultimedia(){
    document.querySelector('#interfaz2').style.display = "none"
    document.querySelector('#interfaz8').style.display = "block"
}
function volverInterfaz7(){
    document.querySelector('#interfaz7').style.display = 'none';
    document.querySelector('#interfaz1').style.display = 'block';
}
function volverInterfaz6(){
    document.querySelector('#interfaz6').style.display = 'none';
    document.querySelector('#interfaz1').style.display = 'block';
}
function volverInterfaz3(){
    document.querySelector('#interfaz3').style.display = 'none';
    document.querySelector('#interfaz1').style.display = 'block';
}
function volverInterfaz4(){
    document.querySelector('#interfaz4').style.display = 'none';
    document.querySelector('#interfaz1').style.display = 'block';
}
function volverInterfaz8(){
    document.querySelector('#interfaz8').style.display = 'none';
    document.querySelector('#interfaz1').style.display = 'block';
}
function volverInterfaz5(){
    document.querySelector('#interfaz5').style.display = 'none';
    document.querySelector('#interfaz1').style.display = 'block';
}
function cambiarPlaceholder(placeholder, elemento) {
    var escribaInput = document.getElementById('escriba');
    escribaInput.placeholder = placeholder;
    escribaInput.setAttribute('data-placeholder', placeholder);
    escribaInput.focus(); 

    escribaInput.setAttribute('data-contenedor', elemento.getAttribute('data-placeholder'));
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        reflejarTexto();
    }
});

function reflejarTexto() {
    var escribaInput = document.getElementById('escriba');
    var contenedor = document.querySelector('.contenedor-chat[data-placeholder="' + escribaInput.getAttribute('data-contenedor') + '"] .contenedores7 span');
    
    if (contenedor) {
        var texto = escribaInput.value;
        contenedor.textContent = texto;
        escribaInput.value = '';
    }
}
function agregarTexto(texto) {
    document.getElementById('escriba').value += texto;
}

const inputUsuario = document.getElementById('input-usuario');
const inputNombres = document.getElementById('input-nombres-2');
const inputApellidos = document.getElementById('input-apellidos-2');

inputNombres.addEventListener('input', actualizarUsuario);
inputApellidos.addEventListener('input', actualizarUsuario);

function actualizarUsuario() {
    const nombres = inputNombres.value.trim();
    const apellidos = inputApellidos.value.trim();
    
    const usuario = `${nombres}${nombres && apellidos ? ' ' : ''}${apellidos}`;
    
    inputUsuario.value = usuario.toUpperCase();

    document.getElementById('usuario-nombre').innerText = usuario.toUpperCase();
}




var numeros = document.getElementsByClassName("numero");


for (var i = 0; i < numeros.length; i++) {

 var numeroAleatorio = Math.floor(Math.random() * 101);

 numeros[i].textContent = numeroAleatorio + "%";

 var circulo = numeros[i].parentElement;

 var porcentaje = numeroAleatorio / 100;

 circulo.style.background = "conic-gradient(#41a4d5 0deg, #41a4d5 " + (porcentaje * 360) + "deg, #6ce5e8 " + (porcentaje * 360) + "deg, #6ce5e8 360deg)";
}


function mostrarImagenUsuario(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const imagen = document.querySelector('.div-usuario img');
            imagen.src = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('btn-amigos');
    const menu = document.getElementById('menu-amigos');
    const interfaz2 = document.getElementById('interfaz2');
  
    menuBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        menu.style.width = menu.style.width === '14%' ? '0' : '14%';
        interfaz2.classList.toggle('closed');
    });
  
    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target)) {
            menu.style.width = '0';
            interfaz2.classList.add('closed');
        }
    });
  });
  

function mostrarInput(opcion) {
    if (opcion === 'agregar') {
        document.getElementById('input-agregar').style.display = 'block';
        document.getElementById('input-buscar').style.display = 'none';
    } else if (opcion === 'buscar') {
        document.getElementById('input-buscar').style.display = 'block';
        document.getElementById('input-agregar').style.display = 'none';
    }
}
function agregarAmigo(event) {
    if (event.key === 'Enter') {
        const nombreNuevoAmigo = document.getElementById('input-agregar').querySelector('input').value.trim();
        
        if (nombreNuevoAmigo !== '') {
            const nuevoAmigoDiv = document.createElement('div');
            nuevoAmigoDiv.className = 'menu-amigos-item';
            nuevoAmigoDiv.innerText = nombreNuevoAmigo;

            document.getElementById('menu-amigos').appendChild(nuevoAmigoDiv);

            document.getElementById('input-agregar').querySelector('input').value = '';
        }
    }
}
function buscarAmigos() {
    const inputBuscar = document.getElementById('input-buscar').querySelector('input');
    const letra = inputBuscar.value.trim().toUpperCase();

    const amigos = document.querySelectorAll('.menu-amigos-item');

    amigos.forEach(amigo => {
        const nombreAmigo = amigo.innerText.toUpperCase();
        const comienzaConLetra = nombreAmigo.startsWith(letra);

        amigo.style.display = comienzaConLetra ? 'block' : 'none';
    });
}

function abrirInput(idInput) {
    document.getElementById(idInput).click();
}

function agregarMultimedia(idInput) {
    const inputElement = document.getElementById(idInput);
    const contenidoMultimedia = document.getElementById('container-multimedia');

    contenidoMultimedia.innerHTML = '';

    if (inputElement.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function (e) {
            let multimediaElement;

            const extension = inputElement.files[0].name.split('.').pop().toLowerCase();

            if (extension === 'jpg' || extension === 'jpeg' || extension === 'png' || extension === 'gif') {
                multimediaElement = document.createElement('img');
            } else if (extension === 'mp4' || extension === 'webm' || extension === 'ogg') {
                multimediaElement = document.createElement('video');
                multimediaElement.setAttribute('controls', 'true');
            } else if (extension === 'mp3' || extension === 'ogg' || extension === 'wav') {
                multimediaElement = document.createElement('audio');
                multimediaElement.setAttribute('controls', 'true');
            } else {

                console.error('Formato de archivo no compatible');
                return;
            }

            multimediaElement.src = e.target.result;

            contenidoMultimedia.appendChild(multimediaElement);
        };
        reader.readAsDataURL(inputElement.files[0]);

        document.getElementById('boton-play').style.visibility = 'hidden';
    }
}
function mostrarDocumentacion(){
    document.querySelector('.enlaces-container').style.display = 'none';
    document.querySelector('.documentacion-centro-ayuda').style.display = 'block';
}

function mostrarContacto(){
    document.querySelector('.enlaces-container').style.display = 'none';
    document.querySelector('.enlace-contacto').style.display = 'block';
}

function mostrarExperto(){
    document.querySelector('.enlaces-container').style.display = 'none';
    document.querySelector('.enlace-experto').style.display = 'block';
}

document.querySelector('#close-experto').addEventListener('click', function() {
    document.querySelector('.enlace-experto').style.display = 'none';
    document.querySelector('.enlaces-container').style.display = 'block';
   });
document.querySelector('#close-contacto').addEventListener('click', function() {
    document.querySelector('.enlace-contacto').style.display = 'none';
    document.querySelector('.enlaces-container').style.display = 'block';
   });
   document.querySelector('#close-centro').addEventListener('click', function() {
    document.querySelector('.documentacion-centro-ayuda').style.display = 'none';
    document.querySelector('.enlaces-container').style.display = 'block';
   });
function enviarMensaje() {
    
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre.trim() === '' || correo.trim() === '' || mensaje.trim() === '') {
        alert('Por favor, completa todos los campos.');
    } else {
        alert(`¡Hola, ${nombre}!\nGracias por contactarnos. Tu mensaje ha sido recibido y nuestro equipo de soporte lo revisará. Te enviaremos una respuesta a tu correo electrónico lo antes posible.`);
    }
    document.getElementById('nombre').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('mensaje').value = '';
}
function enviarMensajeExperto() {
    const expertoSeleccionado = document.getElementById('expertos').value;
    const nombre = document.getElementById('nombre-experto').value;
    const mensaje = document.getElementById('mensaje-experto').value;

    if (nombre.trim() === '' || mensaje.trim() === '') {
        window.alert('Por favor, completa tu nombre y mensaje.');
    } else {
        window.alert(`¡Hola, ${nombre}!\nTu mensaje ha sido enviado al ${expertoSeleccionado}.  Recibirás una respuesta pronto.`);
        
        document.getElementById('nombre-experto').value = '';
        document.getElementById('mensaje-experto').value = '';
        document.getElementById('expertos').value = '';
    }
}

function mostrarGrupos(){

    document.querySelector('.divisora-vertical-2').style.display = 'none';
    document.querySelector('.divisora-horizontal-2').style.display = 'none';
    document.querySelector('.label-perfil').style.display = 'none';
    document.querySelector('.label-informacion').style.display = 'none';
    document.querySelector('.botones-perfil-2').style.display = 'none';
    document.querySelector('.inputs-informacion-2').style.display = 'none';
    document.querySelector('.grupos').style.display = 'block';
    document.getElementById('diagonal-button').disabled = true;
}
function cerrargrupos(){
    document.querySelector('.divisora-vertical-2').style.display = 'block';
    document.querySelector('.divisora-horizontal-2').style.display = 'block';
    document.querySelector('.label-perfil').style.display = 'block';
    document.querySelector('.label-informacion').style.display = 'block';
    document.querySelector('.botones-perfil-2').style.display = 'block';
    document.querySelector('.inputs-informacion-2').style.display = 'block';
    document.querySelector('.grupos').style.display = 'none';
}
function mostrarAlerta() {

    var nombreGrupo = document.getElementById('nombreGrupo').value.trim();
    var descripcionGrupo = document.getElementById('descripcionGrupo').value.trim();

    if (nombreGrupo === '' || descripcionGrupo === '') {
        alert('Por favor, complete todos los campos.');
    } else {

        alert('Su grupo se ha creado con éxito.');
        document.getElementById('nombreGrupo').value = '';
        document.getElementById('descripcionGrupo').value = '';
    }
}
function mostrarMuro(){
    document.querySelector('.divisora-vertical-2').style.display = 'none';
    document.querySelector('.divisora-horizontal-2').style.display = 'none';
    document.querySelector('.label-perfil').style.display = 'none';
    document.querySelector('.label-informacion').style.display = 'none';
    document.querySelector('.botones-perfil-2').style.display = 'none';
    document.querySelector('.inputs-informacion-2').style.display = 'none';
    document.querySelector('.Muro').style.display = 'block';
    document.getElementById('diagonal-button').disabled = true;
}
function cerrarMuro(){
    document.querySelector('.divisora-vertical-2').style.display = 'block';
    document.querySelector('.divisora-horizontal-2').style.display = 'block';
    document.querySelector('.label-perfil').style.display = 'block';
    document.querySelector('.label-informacion').style.display = 'block';
    document.querySelector('.botones-perfil-2').style.display = 'block';
    document.querySelector('.inputs-informacion-2').style.display = 'block';
    document.querySelector('.Muro').style.display = 'none';
}
function agregarPublicacion() {
    var contenido = document.getElementById('contenidoPublicacion').value.trim();

    if (contenido === '') {
        alert('Por favor, ingrese contenido para la publicación.');
        return false;
    }

    var inputUsuario = document.getElementById('input-usuario');
    var usuario = inputUsuario.value.trim() || inputUsuario.placeholder.trim();

    var fechaActual = new Date();
    var horaActual = fechaActual.getHours();
    var minutos = fechaActual.getMinutes();
    var segundos = fechaActual.getSeconds();

    var horaFormateada = horaActual + ':' + minutos + ':' + segundos;

    var nuevaPublicacion = document.createElement('div');
    nuevaPublicacion.textContent = ` ${usuario} : ${contenido} - ${horaFormateada}`;

    document.getElementById('publicaciones').appendChild(nuevaPublicacion);

    document.getElementById('contenidoPublicacion').value = '';

    return false;
}
function mostrarForos(){
    document.querySelector('.divisora-vertical-2').style.display = 'none';
    document.querySelector('.divisora-horizontal-2').style.display = 'none';
    document.querySelector('.label-perfil').style.display = 'none';
    document.querySelector('.label-informacion').style.display = 'none';
    document.querySelector('.botones-perfil-2').style.display = 'none';
    document.querySelector('.inputs-informacion-2').style.display = 'none';
    document.querySelector('.foros').style.display = 'block';
    document.getElementById('diagonal-button').disabled = true;
}
function cerrarForos(){
    document.querySelector('.divisora-vertical-2').style.display = 'block';
    document.querySelector('.divisora-horizontal-2').style.display = 'block';
    document.querySelector('.label-perfil').style.display = 'block';
    document.querySelector('.label-informacion').style.display = 'block';
    document.querySelector('.botones-perfil-2').style.display = 'block';
    document.querySelector('.inputs-informacion-2').style.display = 'block';
    document.querySelector('.foros').style.display = 'none';
}
function publicarMensaje() {
    var nombreUsuario = document.getElementById('nombreUsuario').value.trim();
    var tituloMensaje = document.getElementById('tituloMensaje').value.trim();
    var contenidoMensaje = document.getElementById('contenidoMensaje').value.trim();

    if (!nombreUsuario || !tituloMensaje || !contenidoMensaje) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    var mensajesDiv = document.getElementById('mensajess');
    var nuevoMensaje = document.createElement('div');
    nuevoMensaje.innerHTML = `<strong>${nombreUsuario}</strong>: <em>${tituloMensaje}</em><br>${contenidoMensaje}<hr>`;
    mensajesDiv.appendChild(nuevoMensaje);

    document.getElementById('nombreUsuario').value = '';
    document.getElementById('tituloMensaje').value = '';
    document.getElementById('contenidoMensaje').value = '';
}
function cambiarColor(color) {
    var contenedor = document.getElementById('container-multimedia');
    contenedor.style.backgroundColor = color;

    // Si también deseas cambiar el color de los elementos hijos, puedes hacer lo siguiente:
     var elementosHijos = contenedor.children;
    for (var i = 0; i < elementosHijos.length; i++) {
        elementosHijos[i].style.color = color;
    }
}
function mostrarEfectos(){
    document.querySelector('.efectos').style.display = 'block';
}
function ocultarEfectos(){
    document.querySelector('.efectos').style.display = 'none';
}
var efectos = document.querySelector('.efectos');
efectos.addEventListener('mouseleave', ocultarEfectos);
function mostrarTexto(){
    var contenedor = document.getElementById('container-multimedia');
    contenedor.innerHTML = '';

    var inputTexto = document.createElement('textarea');
    inputTexto.id = 'input-texto';
    inputTexto.placeholder = 'Escribe tu texto aquí';
    contenedor.appendChild(inputTexto);
}

function abrirMultimedia(contenedorId) {
    var inputElement = document.getElementById('abrir-' + contenedorId);

    inputElement.click();
}   
var iconoSeleccionado = null;

function seleccionarIcono(icono) {
    iconoSeleccionado = icono;
}

document.addEventListener('DOMContentLoaded', function() {
    var celdas = document.querySelectorAll('td');

    celdas.forEach(function(celda) {
        celda.addEventListener('click', function() {
            if (iconoSeleccionado) {
                var icono = document.createElement('span');
                icono.className = 'icon-overlay';

                // Configurar el contenido del icono según el tipo seleccionado
                if (iconoSeleccionado === 'camara') {
                    icono.innerHTML = '📷'; // Emoji de cámara
                } else if (iconoSeleccionado === 'video') {
                    icono.innerHTML = '🎥'; // Emoji de video
                }

                // Obtener el día actual
                var fechaActual = new Date();
                var diaActual = fechaActual.getDate();

                // Obtener el número de la celda
                var numeroCelda = parseInt(celda.textContent);

                // Verificar si el número de la celda coincide con el día actual
                if (numeroCelda === diaActual) {
                    // Agregar el icono a la celda
                    celda.appendChild(icono);

                    // Mostrar alerta con la fecha actual
                    alert("Hoy es " + diaActual + ". Debe subir pronto su contenido programado.");
                } 
                else {
                    celda.appendChild(icono);
                }

                // Limpiar la selección del icono
                iconoSeleccionado = null;
            }
        });
    });
});
function handleDragStart(event) {
    event.dataTransfer.setData('text/plain', ''); // Necesario para que funcione en algunos navegadores
    event.dataTransfer.effectAllowed = 'move';
}

function guardarContenido() {
    var contenedor = document.getElementById('container-multimedia');

    // Verificar si el contenedor tiene algún contenido
    if (contenedor.innerHTML.trim() === '') {
        alert("No hay nada que guardar.");
        return;
    }

    // Verificar si el contenedor tiene imágenes, videos, audios o textareas
    var tieneContenido = Array.from(contenedor.children).some(function(elemento) {
        return elemento.tagName === 'IMG' || elemento.tagName === 'VIDEO' || elemento.tagName === 'AUDIO' || elemento.tagName === 'TEXTAREA';
    });

    // Mostrar el mensaje apropiado
    if (tieneContenido) {
        alert("Contenido guardado con éxito.");
    } else {
        alert("No hay nada que guardar.");
    }
}
