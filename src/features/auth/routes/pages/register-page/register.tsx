import type { IRegisterFormValues } from "@/features/auth/types/register";
import RegisterForm from "@/features/auth/components/register/register-form";
import { useForm } from "react-hook-form";
import { registerSchema } from "@/features/auth/schema/zod/register-schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function RegisterPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IRegisterFormValues>({
        defaultValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            firstName: "",
            lastName: "",
            phone: "",
        },
        resolver: zodResolver(registerSchema),
    });


    return (
        <section className="flex flex-col justify-center h-screen max-w-2xl mx-auto px-8 py-28">

            <h2 className="mb-4 text-3xl font-bold">
                Create Account
            </h2>


            <RegisterForm />
        </section>
    )
}
