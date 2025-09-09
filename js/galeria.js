

// Lista de productos
const productos = [
  { src: "../images/producto1.jpg", titulo: "Amanecer en la cosecha" },
  { src: "../images/producto2.jpg", titulo: "Balada de pájaros cantores y serpientes" },
  { src: "../images/producto3.jpg", titulo: "Alas de Sangre" },
  { src: "../images/producto4.jpg", titulo: "Alas de Hierro" },
  { src: "../images/producto5.jpg", titulo: "Alas de Onix" },
  { src: "../images/producto6.jpg", titulo: "Circe" }
];

// Referencia al contenedor
const galeria = document.getElementById("galeria");

// Generar dinámicamente los elementos
productos.forEach(producto => {
  const enlace = document.createElement("a");
  enlace.href = producto.src;
  enlace.setAttribute("data-lightbox", "productos");
  enlace.setAttribute("data-title", producto.titulo);

  const img = document.createElement("img");
  img.src = producto.src;
  img.alt = producto.titulo;

  enlace.appendChild(img);
  galeria.appendChild(enlace);
});
