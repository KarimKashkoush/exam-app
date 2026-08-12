import { useEffect, useState } from "react";
import { toast } from "sonner";
import useSendOtp from "@/features/auth/apis/mutation/user-send-otp";
import { Button } from "@/components/ui/button/button";

interface OtpTimerProps {
    email: string;
}

const OTP_DURATION = 60;

export default function OtpTimer({ email }: OtpTimerProps) {
    const { mutate: sendOtp } = useSendOtp();

    const [loading, setLoading] = useState(false);

    const [timeLeft, setTimeLeft] = useState(() => {
        let expire = sessionStorage.getItem("otp-expire");

        if (!expire) {
            expire = (Date.now() + OTP_DURATION * 1000).toString();
            sessionStorage.setItem("otp-expire", expire);
        }

        const remaining = Math.ceil(
            (Number(expire) - Date.now()) / 1000
        );

        return remaining > 0 ? remaining : 0;
    });
    useEffect(() => {
        if (timeLeft <= 0) {
            sessionStorage.removeItem("otp-expire");
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft(() => {
                const expire = sessionStorage.getItem("otp-expire");

                if (!expire) return 0;

                const remaining = Math.ceil(
                    (Number(expire) - Date.now()) / 1000
                );

                return remaining > 0 ? remaining : 0;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const resendCode = async () => {
        try {
            setLoading(true);

            sendOtp(email)

            const expireTime = Date.now() + OTP_DURATION * 1000;

            sessionStorage.setItem(
                "otp-expire",
                expireTime.toString()
            );

            setTimeLeft(OTP_DURATION);
        } catch {
            toast.error("Something went wrong. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    if (timeLeft > 0) {
        return (
            <p className="text-base font-mono text-center text-gray-500 mb-8">
                You can request another code in: <strong>{timeLeft}s</strong>
            </p>
        );
    }

    return (
        <p className="text-base font-mono text-center mb-8">
            Didn't receive the code?{" "}
            <Button
                variant="link"
                type="button"
                disabled={loading}
                onClick={resendCode}
                className="p-0"
            >
                {loading ? "Sending..." : "Resend Code"}
            </Button>
        </p>
    );
}