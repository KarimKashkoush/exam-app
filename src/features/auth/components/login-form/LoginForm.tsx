import Username from "./fileds/username/filed";
import Button from "./button/button";
import { FormProvider, useForm } from "react-hook-form";
import { useAuthStore } from "@/features/auth/stroe/authStore";
import { zodResolver } from "@hookform/resolvers/zod";
import type { LoginFormData } from "@/features/types/login";
import { loginformationSchema } from "../../schema/zod/login";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import { LoginApi } from "../../apis/login/login";
import Password from "./fileds/password/filed";
import FormFeedback from "./form-error/form-error";

export default function LoginForm() {

    const navigate = useNavigate();
    const methods = useForm<LoginFormData>({
        resolver: zodResolver(loginformationSchema),
        defaultValues: {
            username: "",
            password: ""
        },
    });

    const {
        formState: { errors },
    } = methods;

    const onSubmit = async (data: LoginFormData) => {
        try {
            const response = await LoginApi(data);
            if (response.code === 200) {
                useAuthStore.getState().setAuth(response.payload.user, response.payload.token);
                console.log(response);
                toast.success("Login successful!");
                navigate("/");
            }
        } catch (error: unknown) {
            toast.error((error as { message?: string })?.message ?? "Something went wrong. Please try again later.");
        }
    };
    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="flex flex-col gap-4 justify-center"
            >

                <Username />
                <Password />
                <Link to="/auth/forgot-password" className="text-blue-600 font-medium text-sm font-mono text-end mb-1">Forgot your password?</Link>

                {(errors.username || errors.password) && (
                    <FormFeedback>
                        something went wrong!
                    </FormFeedback>
                )}
                <Button />
                <p className="text-sm font-medium text-gray-500 font-mono text-center">Don't have an account? <Link to="/register" className="text-blue-600">Create yours</Link></p>
            </form>
        </FormProvider>
    )
}
