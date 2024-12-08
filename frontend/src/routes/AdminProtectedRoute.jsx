import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { getUser } from '../store/slices/authSlice';

const AdminProtectedRoute = () => {
    const user = useSelector(getUser);
    return (
        user?.isLoggedIn && (user?.role === "admin" || user?.role === "super-admin")
            ? <Outlet />
            : <Navigate to="/home" />
    );
};

export default AdminProtectedRoute;
