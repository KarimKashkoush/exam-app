import { Controller, useFormContext } from "react-hook-form";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";

export default function VerifyField() {
    const {
        control,
    } = useFormContext();

    return (
        <Controller
            name="code"
            control={control}
            defaultValue=""
            render={({ field }) => (
                <InputOTP
                    maxLength={6}
                    value={field.value}
                    onChange={field.onChange}
                >
                    <InputOTPGroup className="mb-6 mx-auto">
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                    </InputOTPGroup>
                </InputOTP>
            )}
        />
    );
}