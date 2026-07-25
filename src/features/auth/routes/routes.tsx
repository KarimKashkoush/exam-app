import { Route } from "react-router-dom";

import AuthLayout from "../layout/auth-layout/auth-layout";
import PublicRoute from "../guards/PublicRoute";

import RegisterPage from "./pages/register-page/register";
import VerifyEmail from "./pages/verify-email/verify-email";
import InformationPersonalPage from "./pages/personal-information-page/information-personal-page";
import RegisterPasswordPage from "./pages/register-password-page/register-password-page";
import LoginPage from "./pages/login-page/login";

export const AuthRoutes = (
    <Route element={<PublicRoute />}>
        <Route path="/auth" element={<AuthLayout />}>
            <Route index element={<LoginPage />} />
            <Route path="/auth/register" element={<RegisterPage />} />
            <Route path="/auth/register/verify-email" element={<VerifyEmail />} />
            <Route path="/auth/register/personal-information" element={<InformationPersonalPage />} />
            <Route path="/auth/register/register-password-page" element={<RegisterPasswordPage />} />
            <Route path="/auth/login" element={<LoginPage />} />
        </Route>
    </Route>
);