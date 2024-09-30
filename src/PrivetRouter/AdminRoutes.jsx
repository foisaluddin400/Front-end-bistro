import { useContext } from "react";
import { UseAdmin } from "../useHook/UseAdmin"
import { AuthContext } from "../AuthProbider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


export const AdminRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = UseAdmin();
    const location = useLocation()

    if(loading || isAdminLoading){
        return <p>loading...</p>
    }
    if(user&& isAdmin){
        return children
    }
    return (
        <Navigate to="/login" state={{ from: location }} replace />
    );
}