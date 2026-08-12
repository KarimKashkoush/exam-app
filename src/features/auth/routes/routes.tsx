import type { RouteObject } from "react-router-dom";

import AuthLayout from "../layout/auth-layout/auth-layout";
import PublicRoute from "../guards/PublicRoute";

import RegisterPage from "./pages/register-page/register";
import LoginPage from "./pages/login-page/login";

export const AuthRoutes: RouteObject[] = [
    {
        element: <PublicRoute />,
        children: [
            {
                path: "/",
                element: <AuthLayout />,
                children: [
                    {
                        index: true,
                        element: <LoginPage />,
                    },
                    {
                        path: "login",
                        element: <LoginPage />,
                    },
                    {
                        path: "register",
                        element: <RegisterPage />,
                    }
                ],
            },
        ],
    },
];