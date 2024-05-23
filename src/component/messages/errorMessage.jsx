import { Bounce, toast } from 'react-toastify';

export const errorMessage = (message) => {
    toast.error(`${message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,        
        });
}
