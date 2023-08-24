import { useContext } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: {children: JSX.Element}): JSX.Element => {
  const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return token; // Retorna true se o token estiver presente
  };

  
  if (isAuthenticated()) {
    return (
      <>
      {children}
      </>
    );
  } else {
    
    return <Navigate to="/login" />;
  }
  
  
};

export default PrivateRoute;
