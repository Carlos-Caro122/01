// Listado de mensajes que se van a mostrar
const mensajes = [
  "Hola",
  "Feliz cumpleaños...",
  "atrasado",
  
];

let indiceActual = 0;
const elementoMensaje = document.getElementById("mensaje");

function mostrarSiguienteMensaje() {
  // 1. Asignar el texto actual
  elementoMensaje.textContent = mensajes[indiceActual];

  // 2. Quitar la clase de animación si la tenía (para reiniciar)
  elementoMensaje.classList.remove("mostrar");

  // Force reflow: obliga al navegador a reiniciar la animación CSS
  void elementoMensaje.offsetWidth;

  // 3. Agregar la clase que dispara la animación CSS
  elementoMensaje.classList.add("mostrar");

  // 4. Pasar al siguiente mensaje (al llegar al final vuelve al inicio)
  indiceActual = (indiceActual + 1) % mensajes.length;
}

// Mostrar el primer mensaje inmediatamente
mostrarSiguienteMensaje();

// Cambiar de mensaje cada 4.5 segundos (4s de animación + 0.5s de pausa entre textos)
setInterval(mostrarSiguienteMensaje, 4500);

