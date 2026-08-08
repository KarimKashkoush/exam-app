import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { sendOtpApi } from "../auth.api";
import { useNavigate } from "react-router-dom";



export default function useSendOtp() {
      const navigate = useNavigate();
      return useMutation({ 
            mutationFn: sendOtpApi,

            onSuccess: () => {
                  toast.success("OTP sent successfully. Please check your email.");
                  // Navigation
                  navigate("/auth/verify-email");
            },

            onError: (error: string) => {
                  toast.error((error as { message?: string })?.message ?? "Something went wrong. Please try again later.");
            }
      })
}