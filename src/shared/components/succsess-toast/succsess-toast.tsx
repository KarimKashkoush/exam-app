"use client"
import { toast } from "sonner"

export function SuccessToast({ succsssText }: { succsssText: string }) {
    return (
        toast.success(succsssText)
    )
}
