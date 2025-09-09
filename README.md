# 📚 Infinity Books

Bienvenido a **Infinity Books**, una librería online creada como proyecto final de JavaScript avanzado.  
El objetivo es ofrecer un catálogo dinámico de libros, un sistema de pedidos interactivo y un formulario de contacto con mapa dinámico.  

---

## 📂 Contenido del proyecto

- **`index.html`** → Página de inicio con 4 secciones:
  - Presentación de la librería
  - Recomendaciones de la semana
  - Noticias literarias (cargadas dinámicamente con AJAX desde `data/noticias.json`)
  - Sección "Sobre nosotros"

- **`views/productos.html`** → Galería dinámica de productos (con Lightbox2 y JavaScript).

- **`views/presupuesto.html`** → Formulario de pedido:
  - Selección de producto único mediante desplegable
  - Extras opcionales
  - Plazos de entrega
  - Cálculo automático del total y validación de datos

- **`views/contacto.html`** → Formulario de contacto + Mapa dinámico:
  - Mapa de Leaflet con la ubicación de la librería
  - Geolocalización del usuario
  - Ruta real entre usuario y librería con Leaflet Routing Machine
  - Validación de formulario en tiempo real

- **Carpeta `css/`** → Estilos de la página.  
- **Carpeta `js/`** → Scripts de la web (`noticias.js`, `galeria.js`, `pedido.js`).  
- **Carpeta `images/`** → Imágenes de productos, iconos y favicon.  
- **Carpeta `data/`** → Archivo JSON con noticias externas.  

---

## 🛠️ Tecnologías utilizadas
- **HTML5**  
- **CSS3 (Grid & Flexbox)**  
- **JavaScript ES6**  
- **Leaflet.js** (mapas)  
- **Leaflet Routing Machine** (rutas dinámicas)  
- **Lightbox2** (galería de imágenes)  
- **AJAX (Fetch API)** para cargar noticias externas  

---

## ✨ Autor
👩 Estefanía Zambrana  
Proyecto de **JavaScript Avanzado** — 2025  
