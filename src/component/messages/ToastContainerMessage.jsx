import React from 'react'
import { Bounce, ToastContainer } from 'react-toastify'

export const ToastContainerMessage = () => {
  return (
    <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}  
                limit={2}      
                />
  )
}
