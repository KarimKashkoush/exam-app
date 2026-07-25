
import { useFormContext } from "react-hook-form";
import type { RegisterFormData } from "@/features/auth/schema/zod/register";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
export default function PasswordField() {
    const {
        register,
        formState: { errors },
    } = useFormContext<RegisterFormData>();
    return (
        <section>
            <Field>
                <div className="mb-8">
                    <FieldLabel htmlFor="password">
                        Password<span className="text-red-500">*</span>
                    </FieldLabel>

                    <Input
                        id="password"
                        type="password"
                        placeholder="* * * * * * * *"
                        {...register("password")}
                    />

                    {/* erroe */}

                    {errors.password && (
                        <p className="text-sm text-red-500">
                            {errors.password.message}
                        </p>
                    )}

                </div>
            </Field>

            <Field>
                <FieldLabel htmlFor="confirm-password">
                    Confirm Password<span className="text-red-500">*</span>
                </FieldLabel>

                <Input
                    id="confirm-password"
                    type="password"
                    placeholder="* * * * * * * *"
                    {...register("confirmPassword")}
                />

                {errors.confirmPassword && (
                    <p className="text-sm text-red-500">
                        {errors.confirmPassword.message}
                    </p>
                )}
            </Field>
        </section>
    )
}
