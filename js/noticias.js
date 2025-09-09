document.addEventListener("DOMContentLoaded", () => {
  fetch("data/noticias.json")
    .then(res => res.json())
    .then(noticias => {
      const contenedor = document.getElementById("contenedorNoticias");
      contenedor.innerHTML = "";
      noticias.forEach(noticia => {
        const div = document.createElement("div");
        div.innerHTML = `<h3>${noticia.titulo}</h3><p>${noticia.descripcion}</p>`;
        contenedor.appendChild(div);
      });
    })
    .catch(err => {
      document.getElementById("contenedorNoticias").innerHTML =
        "<p>Error cargando noticias.</p>";
      console.error(err);
    });
});
