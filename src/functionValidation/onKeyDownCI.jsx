export const onKeyDownCI = (event, valueForm) => {
  const CI = valueForm.CI;

  if (event.key === "Backspace" || event.key === "Delete") {
    return;
  }

  const isArrowKey = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Tab"].includes(event.key);

  // Verificar si la tecla presionada es un número
  const isNumber = !isNaN(event.key) && !isNaN(parseFloat(event.key));

  // Ajustar la condición para verificar si CI.length es menor o igual a 10 (para un total de 11 dígitos)
  if (!isArrowKey && !isNumber) {
    event.preventDefault();
  }

  // Limitar la longitud de CI a 11 dígitos
  if (CI.length >= 11 && !isArrowKey && event.key !== "Backspace" && event.key !== "Delete") {
    event.preventDefault();
  }
};
