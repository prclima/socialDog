import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { userContexto } from "../UserContext";

function ProtectedRoute({ children }) {
  const { login } = useContext(userContexto);

  return <div>{login ? children : <Navigate to="/login" />}</div>;
}

export default ProtectedRoute;
