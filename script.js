document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".btn-primary");
    const carritoContador = document.getElementById("carrito-contador");

    let totalProductos = 0;

    botones.forEach(boton => {
      boton.addEventListener("click", () => {
        totalProductos++;
        carritoContador.textContent = `🛒 (${totalProductos})`;
        const producto = boton.closest(".card").querySelector(".card-title").innerText;
        alert(`"${producto}" ha sido agregado al carrito.`);
      });
    });
  });