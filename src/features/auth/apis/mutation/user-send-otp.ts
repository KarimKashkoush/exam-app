import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { sendOtpApi } from "../auth.api";



export default function useSendOtp() {
      return useMutation({ 
            mutationFn: sendOtpApi,

            onSuccess: () => {
                  toast.success("OTP sent successfully. Please check your email.");
            },
      })
}