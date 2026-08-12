import type { RouteObject } from "react-router-dom";

import DiplomaLayout from "../layout/diploma-layout";
import DiplomasPage from "./pages/Diplomas/diplomas";
import ProtectedRoute from "@/features/auth/guards/ProtectedRoute";

export const DiplomasRoute: RouteObject[] = [
    {
        element: <ProtectedRoute />,
        children: [
            {
                path: "diplomas",
                element: <DiplomaLayout />,
                children: [
                    {
                        index: true,
                        element: <DiplomasPage />,
                    },
                ],
            },
        ],
    },
];