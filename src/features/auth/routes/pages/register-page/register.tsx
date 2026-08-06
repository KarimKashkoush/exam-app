import type { IRegisterFormValues, IRegisterStep } from "@/features/auth/types/form";
import { useState } from "react";
import { REGISTER_STEPS } from "@/features/auth/constant/form-constant";
import RegisterForm from "@/features/auth/components/register/register-form";
import { useForm, type SubmitHandler } from "react-hook-form";

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
    });

    const onSubmit: SubmitHandler<IRegisterFormValues> = (data) => {
        console.log(data)
    }

    const [step, setStep] = useState<IRegisterStep>(REGISTER_STEPS.EMAIL);
    return (
        <section className="flex flex-col justify-center h-screen max-w-2xl mx-auto px-8 py-28">

            <h2 className="mb-4 text-3xl font-bold">
                Create Account
            </h2>


            <RegisterForm />
        </section>
    )
}
