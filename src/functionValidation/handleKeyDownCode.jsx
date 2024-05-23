export const handleKeyDownCode = (event) => {
    const key = event.key;  
    if (!/^\d$/.test(key) || event.target.value.length >= 4) {
      event.preventDefault();
    }
  };
  