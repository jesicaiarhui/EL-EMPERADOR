document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los botones de disponibilidad
    const availableButtons = document.querySelectorAll(".available");
    const unavailableButtons = document.querySelectorAll(".unavailable");

    // Agrega un evento de clic a cada botón de disponibilidad
    availableButtons.forEach(button => {
        button.addEventListener("click", function() {
            this.closest(".menu-item").querySelector(".unavailable").disabled = false;
            this.disabled = true;
        });
    });

    unavailableButtons.forEach(button => {
        button.addEventListener("click", function() {
            this.closest(".menu-item").querySelector(".available").disabled = false;
            this.disabled = true;
        });
    });
});
