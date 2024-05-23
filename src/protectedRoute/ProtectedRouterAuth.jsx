import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRouterAuth = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
 
    return isAuthenticated  ? <Navigate to="/" /> : <Outlet />;
}
