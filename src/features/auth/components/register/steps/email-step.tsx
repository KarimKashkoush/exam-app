import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import type { IRegisterFormValues } from "@/features/auth/types/form";
import { ChevronRight } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";

export default function EmailStep() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IRegisterFormValues>({
        defaultValues: {
            email: "",
        },
    });

    const onSubmit: SubmitHandler<IRegisterFormValues> = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email Field */}
            <Field className="mb-10">
                {/* Label */}
                <FieldLabel htmlFor="email">
                    Email
                </FieldLabel>

                {/* Input */}
                <Input
                    type="text"
                    id="email"
                    placeholder="user@example.com"
                    {...register("email")}
                />

                {/* Error */}
                <FieldError>{errors.email?.email}</FieldError>
            </Field>

            {/* Submit Button */}
            <Button className="mb-9 w-full" variant="outline">Next <ChevronRight /></Button>

            <p className="text-center text-gray-500 text-sm font-medium">Already have an account?<Button variant="link">Login</Button> </p>
        </form>
    )
}