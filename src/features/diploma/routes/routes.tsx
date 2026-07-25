import { Route } from "react-router-dom";

// import PublicRoute from "../"
import DiplomaLayout from "../layout/diploma-layout";
import DiplomasPage from "./pages/Diplomas/diplomas";
import ProtectedRoute from "@/features/auth/guards/ProtectedRoute";


export const DiplomasRoute = (
    <Route element={<ProtectedRoute  />}>
        <Route path="/" element={<DiplomaLayout />}>
            <Route index element={<DiplomasPage />} />
        </Route>
    </Route>
);