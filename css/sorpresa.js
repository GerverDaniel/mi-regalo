const mensaje = `
No importa el tiempo,
no importa la distancia,
ni los días difíciles…

Te elijo hoy,
te elegiré mañana,
y siempre.

Solo serás tú en mi vida,
tú, tú y tú, nadie más que tú.
Te amo mi princesa. 
`;

const mensajeEl = document.getElementById("mensaje");
const boton = document.getElementById("botonPromesa");
const respuesta = document.getElementById("respuesta");

let i = 0;

function escribir() {
    if (i < mensaje.length) {
        mensajeEl.textContent += mensaje.charAt(i);
        i++;
        setTimeout(escribir, 40);
    }
}

escribir();

boton.addEventListener("click", () => {
    respuesta.textContent = "Prometo amarte y cuidarte siempre 💖";
    respuesta.style.opacity = 1;
    boton.style.display = "none";
});
// CORAZONES FLOTANDO
setInterval(() => {
    const corazon = document.createElement("span");
    corazon.textContent = "💖";
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.fontSize = Math.random() * 15 + 18 + "px";
    corazon.style.animationDuration = Math.random() * 3 + 4 + "s";

    document.querySelector(".corazones").appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 6000);
}, 500);
