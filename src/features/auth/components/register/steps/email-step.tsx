import { Button } from "@/components/ui/button/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import useSendOtp from "@/features/auth/apis/mutation/usr-send-otp";
import { registerSchema } from "@/features/auth/schema/zod/register-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronRight } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import z from "zod";

const emailStepSchema = registerSchema.pick({
    email: true,
});

type EmailStepSchema = z.infer<typeof emailStepSchema>;

export default function EmailStep() {
    const {
        mutate: emailVerify,
        error,
        isPending,
    } = useSendOtp();

    const {
        register,
        handleSubmit,
        formState,
    } = useForm<EmailStepSchema>({
        defaultValues: {
            email: "",
        },
        resolver: zodResolver(emailStepSchema),
    });

    const onSubmit: SubmitHandler<EmailStepSchema> = (values) => {
        emailVerify(values);
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
                />

                <FieldError>
                    {formState.errors.email?.message}
                </FieldError>
            </Field>

            {/* <FormFeedback>{error?.message}</FormFeedback> */}

            {/* Submit Button */}
            <Button
                type="submit"
                className="mb-9 w-full"
                variant="outline"
                disabled={!formState.isValid || formState.isSubmitting}
                isLoading={isPending}
            >
                Next
                <ChevronRight />
            </Button>

            <FormFead

            <p className="text-center text-gray-500 text-sm font-medium">
                Already have an account?
                <Button variant="link">
                    Login
                </Button>
            </p>
        </form>
    );
}