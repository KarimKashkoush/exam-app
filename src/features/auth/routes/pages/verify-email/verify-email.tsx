import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";

import VerifyField from "@/features/auth/components/otp/verify/form/field/filed";
import VerifyFormBtn from "@/features/auth/components/otp/verify/form/button/button";

import { otpVerification } from "@/features/auth/apis/otp/otp";
import { verifyOtpSchema } from "@/features/auth/schema/zod/verify-otp";
import type { VerifyOtpFormData } from "@/features/types/verify-otp-interface";
import OtpTimer from "@/features/auth/components/otp/otp-timer/otp-timer";
import SubHeading from "@/features/auth/components/register/sub-heading";

export default function VerifyEmail() {
    const navigate = useNavigate();
    const { state } = useLocation();

    const email = state?.email;
    const methods = useForm<VerifyOtpFormData>({
        resolver: zodResolver(verifyOtpSchema),
        defaultValues: {
            code: "",
        },
    });


    const onSubmit = async (data: VerifyOtpFormData) => {
        try {

            const response = await otpVerification({
                code: data.code,
                email,
            });

            console.log(response);



            if (!response.status) {
                toast.error(response.message);
                return;
            }

            toast.success(response.message);

            navigate("/register/personal-information", { state: { email } });
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong. Please try again later.");
        }
    };

    return (
        <section className="flex flex-col justify-center h-screen max-w-2xl mx-auto px-8 py-28">
            <Stepper steps={4} currentStep={2} />

            <h2 className="mb-3 text-3xl font-bold">
                Create Account
            </h2>


            <SubHeading>Verify OTP</SubHeading>

            <p className="text-base text-gray-500 font-mono">
                Please enter the 6-digits code we have sent to:
            </p>

            <span className="mb-6 block">
                {email}
                {" "}
                <Link to="/register" className="text-blue-600 underline">
                    Edit
                </Link>
            </span>

            <FormProvider {...methods}>
                <form
                    onSubmit={methods.handleSubmit(onSubmit)}
                >
                    <VerifyField />

                    <OtpTimer email={email} />

                    <VerifyFormBtn />
                </form>
            </FormProvider>
        </section>
    );
}