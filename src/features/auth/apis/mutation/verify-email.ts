import { useMutation } from "@tanstack/react-query"
import { verifyEmailApi } from "../auth.api"
import { toast } from "sonner"

export default function useVerifyEmail() {
      return useMutation({
            mutationFn: verifyEmailApi,
            onSuccess: () => {
                  toast.success("Email verified successfully")
            }
      })

}