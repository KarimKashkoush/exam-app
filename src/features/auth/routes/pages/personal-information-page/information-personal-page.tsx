import InformationPersonalForm from "@/features/auth/components/information-personal/form/information-personal-form";
import Stepper from "@/features/auth/components/register-form/stepper/stepper";
import { personalInformationSchema } from "@/features/auth/schema/zod/personal-information";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import type z from "zod";

export default function InformationPersonalPage() {
    const form = useForm<z.infer<typeof personalInformationSchema>>({
        resolver: zodResolver(personalInformationSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            username: "",
            phoneNumber: "",
        },
    });
    
    return (
        <section className="flex flex-col justify-center h-screen max-w-2xl mx-auto px-8 py-28">
            <Stepper steps={4} currentStep={3} />
            <h2 className="text-3xl font-bold mb-6">
                Create Account
            </h2>

            <h3 className="text-blue-600 text-2xl font-bold font-inter mb-6">
                Tell us more about you
            </h3>

            <FormProvider {...form}>
                <InformationPersonalForm />
            </FormProvider>

        </section >
    )
}
