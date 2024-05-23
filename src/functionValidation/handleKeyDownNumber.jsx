export const handleKeyDownNumber = (event) => {

    if (event.key === "Backspace" || event.key === "Delete" || ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Tab"].includes(event.key)) {
      return;
    }
    
    const isNumber =!isNaN(event.key) && event.key.length === 1;
  
    if (!isNumber) {
      event.preventDefault();
    }
}
