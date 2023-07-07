let inputCiudad = document.getElementById('input-region');
let inputMes = document.getElementById('input-mes');
let inputUbicacion = document.getElementById('input-ubicacion');
let btnActualizar = document.getElementById('btn-forzar-act');

let displayCiudad = document.getElementById('region');
let displayMes = document.getElementById('mes');
let displayUbicacion = document.getElementById('ubicacion');
let displayCiudadFooter = document.getElementById('depto-footer');

inputCiudad.addEventListener('input', function escribirCiudad() {
    displayCiudad.innerHTML = inputCiudad.value;
    displayCiudadFooter.innerHTML = inputCiudad.value;
});
inputMes.addEventListener('input', function escribirMes() {
    displayMes.innerHTML = inputMes.value;
});
inputUbicacion.addEventListener('input', function escribirUbicacion() {
    displayUbicacion.innerHTML = inputUbicacion.value;
});

function copiarString() {
    navigator.clipboard.writeText(".area-boletin");
    alert('Pega el texto copiado en la extensión "DOM Capture" y da click en "Save as image" 👉');
}

function convertirTexto() {
    var input = document.getElementById('input-lista');
    var lista = document.getElementById('lista');

    // Limpiamos la lista antes de añadir nuevos elementos
    lista.innerHTML = '';

    // Obtenemos el texto ingresado por el usuario
    var texto = input.value;

    // Dividimos el texto en líneas
    var lineas = texto.split('\n');

    // Creamos un elemento <li> por cada línea y lo agregamos a la lista
    lineas.forEach(function (linea) {
        if (linea.trim() !== '') {
            var li = document.createElement('li');

            if (linea.trim().startsWith('-')) {
                li.textContent = linea.trim().substring(1); // Removemos el guión al principio
                li.classList.add('boletin-area'); // Agregamos la clase CSS .boletin-area
            } else {
                li.textContent = linea.trim();
            }

            lista.appendChild(li);
        }
    });
}