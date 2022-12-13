import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ReqAuth = ({ children }) => {
  const { isAuth } = useSelector((store) => store.auth);
  if (isAuth) {
    return children;
  }

  return <Navigate to="/" replace />;
};
