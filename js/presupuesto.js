document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formPedido");
    const nombre = document.getElementById("nombre");
    const apellidos = document.getElementById("apellidos");
    const email = document.getElementById("email");
    const cantidades = document.querySelectorAll("input[type='number'][data-precio]");
    const extras = document.querySelectorAll(".extra");
    const totalSpan = document.getElementById("total");
    const condiciones = document.getElementById("condiciones");
    const submitBtn = form.querySelector("button[type='submit']");

    function validarCampos() {
        const nombreValido = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]{1,15}$/.test(nombre.value);
        const apellidosValido = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]{1,40}$/.test(apellidos.value);
        const emailValido = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email.value);
        const algunLibro = Array.from(cantidades).some(input => parseInt(input.value) > 0);
        return nombreValido && apellidosValido && emailValido && condiciones.checked && algunLibro;
    }

    function calcularTotal() {
        let total = 0;

        cantidades.forEach(input => {
            const cantidad = parseInt(input.value) || 0;
            const precio = parseFloat(input.dataset.precio);
            total += cantidad * precio;
        });

        extras.forEach(extra => {
            if (extra.checked) {
                total += parseFloat(extra.value);
            }
        });

        totalSpan.textContent = total.toFixed(2) + "€";
    }

    form.addEventListener("input", () => {
        calcularTotal();
        submitBtn.disabled = !validarCampos();
    });

    form.addEventListener("submit", e => {
        e.preventDefault();
        alert("¡Pedido enviado con éxito!");
        form.reset();
        totalSpan.textContent = "0€";
        submitBtn.disabled = true;
    });
});

