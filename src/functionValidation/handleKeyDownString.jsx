export const handleKeyDownString = (event) => {
  const { key, target } = event;
  
  // Permitir solo letras y espacios
  if (!/^[a-zA-Z ]*$/i.test(key)) {
    event.preventDefault();
    return;
  }
  
  // Convertir el valor del input a mayúsculas
  const capitalizeInput = (input) => {
    const words = input.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return words.join(' ');
  };
  
  // Actualizar el valor del input
  target.value = capitalizeInput(target.value);
};
