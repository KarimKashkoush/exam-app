import { type RouteObject } from "react-router";
import AuthLayout from "./features/auth/layout/auth-layout/auth-layout";
import { AuthRoutes } from "./features/auth/routes/routes";
import AuthGuard from "./features/auth/components/auth-guard";
import { DiplomasRoute } from "./features/diploma/routes/routes";

export const routes: RouteObject[] = [
      {
            path: "/",
            children: [
                  // Authentication Routes
                  {
                        element: <AuthLayout />,
                        children: AuthRoutes,
                  },

                  // User Routes
                  {
                        // Component: AuthGuard,
                        element: <AuthGuard />,
                        children: DiplomasRoute,
                  },
            ],
      },
      {
            path: "/dashboard",
            element: (
                  <>
                        <h1 className="text-3xl font-bold underline">Admin Dashboard</h1>
                  </>
            ),
      },
];

// Authentication vs Authorization
