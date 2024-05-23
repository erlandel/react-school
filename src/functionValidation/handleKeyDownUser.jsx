export const handleKeyDownUser = (event) => {

  if (event.key.length === 1 && (event.key.match(/[a-zA-Z]/) || event.key === ' ')) {
  
    if (event.key === event.key.toUpperCase()) {
      
      event.preventDefault();
    }
   
    if (event.key === ' ') {
      event.preventDefault();
    }
  }
};
