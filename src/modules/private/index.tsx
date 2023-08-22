import { useContext } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Element }: any): JSX.Element => {
  const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return !!token; // Retorna true se o token estiver presente
  };

  if (isAuthenticated()) {
    <Element />;
  } else {
    <Navigate to="/login" />;
  }

  return <Element />;
};

export default PrivateRoute;
