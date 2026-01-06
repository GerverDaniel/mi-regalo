document.querySelectorAll(".foto").forEach(foto => {
    foto.addEventListener("click", () => {
        foto.classList.toggle("activa");
    });
});
