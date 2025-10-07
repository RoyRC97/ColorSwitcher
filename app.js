// Función para asignar el evento de click a un botón y cambiar color de fondo
function cambiarColorBoton(buttonId, color) {
  const btn = document.getElementById(buttonId);
  if (!btn) {
    console.warn(`No se encontró el botón con id "${buttonId}".`);
    return;
  }
  btn.addEventListener('click', () => {
    // Cambia el color de fondo del body
    document.body.style.backgroundColor = color;
  });
}

// Configuramos los tres botones con sus colores
cambiarColorBoton('btn-celeste', 'lightblue');
cambiarColorBoton('btn-verde', 'lightgreen');
cambiarColorBoton('btn-amarillo', 'lightyellow');


