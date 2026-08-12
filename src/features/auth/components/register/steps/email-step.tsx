
import { Button } from "@/components/ui/button/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import useSendOtp from "@/features/auth/apis/mutation/user-send-otp";
import { registerSchema } from "@/features/auth/schema/zod/register-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronRight } from "lucide-react";
import { useForm, useFormContext, type SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import z from "zod";
import FormFeedback from "../../login-form/form-error/form-error";
import type { SetStateAction } from "react";
import type { IRegisterFormValues, IRegisterStep } from "@/features/auth/types/register";
import { REGISTER_STEPS } from "@/features/auth/constant/form-constant";

const emailStepSchema = registerSchema.pick({
    email: true,
});

type EmailStepSchema = z.infer<typeof emailStepSchema>;

interface IRegisterFormProps {
    setStep: React.Dispatch<SetStateAction<IRegisterStep>>;
}

export default function EmailStep({ setStep }: IRegisterFormProps) {
    const {
        mutate: sendOtp,
        isPending,
        isError,
        error,
    } = useSendOtp();

    const {setValue} = useFormContext<IRegisterFormValues>();
    const {
        register,
        handleSubmit,
    } = useForm<EmailStepSchema>({
        defaultValues: {
            email: "",
        },
        resolver: zodResolver(emailStepSchema),
        mode: "onChange",
    });

    const onSubmit: SubmitHandler<EmailStepSchema> = (values) => {
        sendOtp(values.email, {
            onSuccess: () => { 
                setStep(REGISTER_STEPS.OTP);
                setValue("email", values.email);
            }
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email Field */}
            <Field className="mb-10">
                <FieldLabel htmlFor="email">
                    Email
                </FieldLabel>

                <Input
                    type="email"
                    id="email"
                    placeholder="user@example.com"
                    {...register("email")}
                    aria-invalid={isError}
                />
            </Field>

            {/* Form Feedback */}
            <FormFeedback>
                {error?.message}
            </FormFeedback>

            {/* Submit Button */}
            <Button
                type="submit"
                className="mb-9 w-full"
                variant="outline"
                isLoading={isPending}
            >
                Next
                <ChevronRight />
            </Button>

            <p className="text-center text-gray-500 text-sm font-medium">
                Already have an account?
                <Link to="/login" className="text-blue-600 font-medium text-sm font-mono ml-1">
                    Login
                </Link>
            </p>
        </form>
    );
}