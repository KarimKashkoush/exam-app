import type { IRegisterStep } from "@/features/auth/types/register";
import RegisterForm from "@/features/auth/components/register/register-form";
import { useState } from "react";
import { REGISTER_STEPS } from "@/features/auth/constant/form-constant";
import StepsProgress from "@/features/auth/components/register/steps-progress";

export default function RegisterPage() {

    const [step, setStep] = useState<IRegisterStep>(REGISTER_STEPS.EMAIL);
    // Assuming IregisterStep.Email is the initial step. Adjust according to your actual enum or type.


    return (
        <section className="flex flex-col justify-center h-screen max-w-2xl mx-auto px-8 py-28">
            {step !== REGISTER_STEPS.EMAIL && (
                <StepsProgress step={step} />
            )}
            <h1 className="mb-4 text-3xl font-bold">
                Create Account
            </h1>


            <RegisterForm step={step} setStep={setStep} />
        </section>
    )
}
