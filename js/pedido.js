// js/pedido.js

const form = document.getElementById("formPedido");
const producto = document.getElementById("producto");
const extras = document.querySelectorAll(".extra");
const plazos = document.querySelectorAll("input[name='plazo']");
const totalSpan = document.getElementById("total");
const condiciones = document.getElementById("condiciones");
const submitBtn = form.querySelector("button[type='submit']");

// Calcular total
function calcularTotal() {
  let total = 0;

  // Producto seleccionado
  const precioProducto = parseFloat(producto.value) || 0;
  total += precioProducto;

  // Extras
  extras.forEach(extra => {
    if (extra.checked) {
      total += parseFloat(extra.value);
    }
  });

  // Plazo
  plazos.forEach(plazo => {
    if (plazo.checked) {
      total += parseFloat(plazo.value);
    }
  });

  totalSpan.textContent = total + "€";
}

// Validar condiciones
function validarFormulario() {
  submitBtn.disabled = !condiciones.checked;
}

// Eventos
producto.addEventListener("change", calcularTotal);
extras.forEach(extra => extra.addEventListener("change", calcularTotal));
plazos.forEach(plazo => plazo.addEventListener("change", calcularTotal));
condiciones.addEventListener("change", validarFormulario);

form.addEventListener("submit", e => {
  e.preventDefault();
  alert("✅ Pedido realizado con éxito. Total: " + totalSpan.textContent);
  form.reset();
  totalSpan.textContent = "0€";
  submitBtn.disabled = true;
});
