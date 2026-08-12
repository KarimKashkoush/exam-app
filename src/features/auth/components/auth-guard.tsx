import { Navigate, Outlet } from "react-router-dom";

import useToken from "../hooks/use-token";

export default function AuthGuard() {
  const { getToken } = useToken();

  const token = getToken();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}