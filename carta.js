// SONIDO DE ESCRITURA
const sonido = new Audio("escritura.mp3");
sonido.volume = 0.3;
sonido.loop = true;

// TEXTO DE LA CARTA
const mensaje = `
Desde que llegaste a mi vida, todo cambió.

Tus sonrisas iluminan mis días,
tu voz calma mis pensamientos,
y tu amor hace que mi corazón lata más fuerte.

No sé qué hice para merecerte,
pero prometo cuidarte,
respetarte y amarte cada día.

Gracias por existir,
gracias por ser tú.

Me enseñaste lo que es el amor, ahora
quiero ponerlo en práctica contigo, 
te amo mucho Kelly.

Te amo con todo mi corazón 💖
`;

const textoElemento = document.getElementById("texto");
let indice = 0;

function escribirTexto() {
    if (indice === 0) {
        sonido.play();
    }

    if (indice < mensaje.length) {
        textoElemento.textContent += mensaje.charAt(indice);
        indice++;
        setTimeout(escribirTexto, 40);
    } else {
        sonido.pause();
        sonido.currentTime = 0;
        document.getElementById("teAmo").style.display = "inline-block";
    }
}

escribirTexto();

// CORAZONES FLOTANDO
setInterval(() => {
    const corazon = document.createElement("span");
    corazon.textContent = "💖";
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.fontSize = Math.random() * 20 + 15 + "px";
    corazon.style.animationDuration = Math.random() * 3 + 4 + "s";

    document.querySelector(".corazones").appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 6000);
}, 500);
const boton = document.getElementById("teAmo");
const mensajeFinal = document.getElementById("mensajeFinal");

boton.addEventListener("click", () => {
    mensajeFinal.textContent = "Eres lo mejor que me pasó 💕";

    for (let i = 0; i < 10; i++) {
        const corazon = document.createElement("span");
        corazon.textContent = "💖";
        corazon.style.left = Math.random() * 100 + "vw";
        corazon.style.fontSize = "25px";
        corazon.style.animationDuration = "3s";

        document.querySelector(".corazones").appendChild(corazon);

        setTimeout(() => {
            corazon.remove();
        }, 3000);
    }
});
