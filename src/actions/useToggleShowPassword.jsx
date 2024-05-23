import { useState } from 'react';

export const useToggleShowPassword = () => {
 const [showPassword, setMostrarContrasena] = useState(false);

 const toggleShowPassword = () => {
    setMostrarContrasena(!showPassword);
 };

 return {showPassword, toggleShowPassword };
};
