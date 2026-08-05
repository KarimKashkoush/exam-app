import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerEmailSchema, type RegisterFormData } from "../../schema/zod/register-email";
import Email from "./form/fields/email/field";
import ButtonForm from "./form/button/next-button/button";
import { emailVerification } from "../../apis/email-verification/email-verification";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
export default function EmailForm() {
    const navigate = useNavigate();
    const methods = useForm<RegisterFormData>({
        resolver: zodResolver(registerEmailSchema),
        defaultValues: {
            email: "",
        },
    });

    const onSubmit = async (data: RegisterFormData) => {
        try {
            const response = await emailVerification(data.email);


            toast.success(response.message);
            navigate("/auth/register/verify-email", { state: { email: data.email } });
        } catch (error) {
            toast.error(error?.message ?? "Something went wrong. Please try again later.");
        }
    };

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="flex flex-col justify-center"
            >
                <Email />

                <ButtonForm />
            </form>
        </FormProvider>
    );
}