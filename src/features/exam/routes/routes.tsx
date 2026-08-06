import { Route } from "react-router-dom";

// import PublicRoute from "../"
import ExamLayout from "../layout/exam-layout";
import ExamsPage from "./pages/exams-page";
import ProtectedRoute from "@/features/auth/guards/ProtectedRoute";


export const ExamRoutes = (
    <Route element={<ProtectedRoute />}>
        <Route path="/diplomas/:id/exams" element={<ExamLayout />}>
            <Route index element={<ExamsPage />} />
        </Route>
    </Route>
);