import Button from "../../components/register-password/form/button/button";
import Field from "./form/field/field";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation, useNavigate } from "react-router-dom";

import { registerSchema, type RegisterFormData } from "@/features/auth/schema/zod/register";

import { register } from "../../apis/register/register";
import { toast } from "sonner";

export default function RegisterPasssword() {
    const { state } = useLocation();
    const navigate = useNavigate();

    const methods = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            username: state.username,
            email: state.email,
            firstName: state.firstName,
            lastName: state.lastName,
            phone: state.phoneNumber,
            password: "",
            confirmPassword: "",
        },
    });
    const onSubmit = async (data: RegisterFormData) => {
        try {
            console.log("Form data before submission:", data);
            const response = await register(data);

            if (!response.status) {
                toast.error(response.message);
                return;
            }

            toast.success(response.message);
            navigate("/login");
        } catch (err) {
            toast.error((err as Error).message || "Something went wrong. Please try again later.");
        }
    };
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Field />
                <Button />
            </form>
        </FormProvider >
    )
}
