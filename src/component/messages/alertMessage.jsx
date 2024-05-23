import swal from 'sweetalert';
import '../../styles/alertMessage.css';

export const alertMessage = (message) => {
    return swal({       
        text: message,
        icon: "info",
        buttons: ["Cancelar", "Aceptar"],
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {   
            return true; 
        } else {           
            return false; 
        }
    });
};
