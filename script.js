const ledBtn = document.getElementById("ledBtn");
const led = document.getElementById("led");
let encendido = false;

ledBtn.addEventListener("click", () => {
  encendido = !encendido;
  if (encendido) {
    led.style.background = "red";
    ledBtn.textContent = "Apagar LED Virtual";
  } else {
    led.style.background = "grey";
    ledBtn.textContent = "Encender LED Virtual";
  }
});
