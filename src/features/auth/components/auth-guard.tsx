
import { Navigate, Outlet } from "react-router";
import useToken from "../hooks/use-token";

export default function AuthGuard() {
  // Hooks
  const { getToken } = useToken();

  // Variables
  const token = getToken();

  if (!token) return <Navigate to="/login" />;

  return <Outlet />;
}