import {useMutation} from "@tanstack/react-query";
import { sedOtpApi } from "../auth.api";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";



export default function useSendOtp() {
      const navigate = useNavigate();
      return useMutation({ 
            mutationFn: sedOtpApi,

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