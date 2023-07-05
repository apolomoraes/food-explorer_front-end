import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";

import { AppRoutes } from "./app.routes";
import { AdminRoutes } from "./admin.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const { user } = useAuth();
  const isAdmin = user && user.admin ? 1 : 0;

  return (
    <BrowserRouter>
      {
        user ? <AppRoutes /> : <AuthRoutes />
      }
      {
        user && isAdmin ? <AppRoutes /> && <AdminRoutes /> : <AuthRoutes />
      }
    </BrowserRouter>
  )
}