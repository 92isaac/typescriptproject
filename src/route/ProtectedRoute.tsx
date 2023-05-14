import { Navigate, Outlet } from "react-router-dom"

const RequireAuth = () => {
    const token = ''

    return (
        token
            ? <Outlet />
            : <Navigate to="/login" state={{ from: location }} replace />
    )
}
export default RequireAuth