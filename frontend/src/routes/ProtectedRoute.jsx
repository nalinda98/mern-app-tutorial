import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'
import { getUser } from '../store/slices/authSlice'

const AdminProtectedRoute = () => {
    const user = useSelector(getUser);
    return(
        user?.isLoggedIn ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default AdminProtectedRoute