let porcentaje = 0;

function llenarCorazon() {
    const progreso = document.getElementById("progreso");
    const emoji = document.getElementById("emoji");
    const corazon = document.getElementById("corazon");
    const mensaje = document.getElementById("mensaje");
    const sonido = document.getElementById("sonidoLatido");
    const entrar = document.getElementById("entrar");
    const nombre = document.getElementById("nombre");

    if (porcentaje < 100) {
        porcentaje += 20;
        progreso.style.width = porcentaje + "%";

        corazon.classList.add("latido");
        setTimeout(() => corazon.classList.remove("latido"), 400);

        if (sonido) {
            sonido.currentTime = 0;
            sonido.play();
        }

        if (porcentaje >= 100) {
            emoji.textContent = "💖";
            mensaje.textContent = "Amor completo 💞";
            entrar.style.display = "inline-block";
            nombre.classList.add("brillo");
        } else {
            mensaje.textContent = "Más amor 💕";
        }
    }
}

function irAlMenu() {
    window.location.href = "menu.html";
}


