let porcentaje = 0;

function llenarCorazon() {
    if (porcentaje < 100) {
        porcentaje += 10;

        const progreso = document.getElementById("progreso");
        const corazon = document.getElementById("corazon");
        const emoji = document.getElementById("emoji");
        const sonido = document.getElementById("sonidoLatido");

        progreso.style.width = porcentaje + "%";
        const mensaje = document.getElementById("mensaje");

if (porcentaje <= 30) {
    mensaje.textContent = "Un poquito de amor 💕";
}
else if (porcentaje <= 60) {
    mensaje.textContent = "Ya late más fuerte 💗";
}
else if (porcentaje < 100) {
    mensaje.textContent = "Casi completo… 💞";
}
else {
    mensaje.textContent = "Todo mi corazón es tuyo 💖";
}


        // sonido
        if (sonido) {
            sonido.currentTime = 0;
            sonido.play();
        }

        // animación (reinicio forzado)
        corazon.classList.remove("latido");
        void corazon.offsetWidth;
        corazon.classList.add("latido");

        // cambio de emoji
        if (porcentaje >= 50) {
            emoji.textContent = "💗";
        }

if (porcentaje >= 100) {
    emoji.textContent = "💖";
   const boton = document.getElementById("entrar");
boton.style.display = "inline-block";

    const nombre = document.getElementById("nombre");
    nombre.classList.add("brillo");
}
            setTimeout(() => {
    document.getElementById("transicion").classList.add("activa");
}, 300);

        }
    }
    function irAlMenu() {
    window.location.href = "menu.html.";
}

