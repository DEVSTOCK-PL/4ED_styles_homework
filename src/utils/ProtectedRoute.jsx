import { Navigate, Outlet } from "react-router-dom";
import useUserContext from "../hooks/useUserContext";

const ProtectedRoute = ({ allowedRoles }) => {
  const { isAuth, userData } = useUserContext();

  const isAllowed = () => {
    if (isAuth && allowedRoles.find((role) => role === userData?.role)) return <Outlet />;
    else if (isAuth) return <Navigate to="/unauthorised" replace={true} />;
    else if (!isAuth) return <Navigate to="/login" replace={true} />;
  };

  return isAllowed();
};

export default ProtectedRoute;
