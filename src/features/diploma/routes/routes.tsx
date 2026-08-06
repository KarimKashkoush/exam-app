import { Navigate, Route } from "react-router-dom";

// import PublicRoute from "../"
import DiplomaLayout from "../layout/diploma-layout";
import DiplomasPage from "./pages/Diplomas/diplomas";
import ProtectedRoute from "@/features/auth/guards/ProtectedRoute";


export const DiplomasRoute = (
    <Route path="/" element={<ProtectedRoute />}>
        <Route index element={<Navigate to="/diplomas" replace />} />

        <Route path="diplomas" element={<DiplomaLayout />}>
            <Route index element={<DiplomasPage />} />
        </Route>
    </Route>
);