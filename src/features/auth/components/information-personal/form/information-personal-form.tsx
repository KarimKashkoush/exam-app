import NameField from "./field/name/field";
import PhoneNumber from "./field/phone-number/field";
import UsernameField from "./field/username/field";
import Button from "../../../components/information-personal/form/button/button"
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import { personalInformationSchema } from "@/features/auth/schema/zod/personal-information";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
export default function InformationPersonalForm() {
    const { state } = useLocation();

    const { handleSubmit } =
        useFormContext<z.infer<typeof personalInformationSchema>>();
    const navigate = useNavigate();

    // add email to the form data before submission
    const onSubmit = (data: z.infer<typeof personalInformationSchema>) => {
        toast.success("Personal information submitted successfully!");
        navigate("/auth/register/register-password-page", {
            state: {
                ...state,
                ...data,
            },
        });
    };
    return (
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
            <NameField />
            <UsernameField />
            <PhoneNumber />
            <Button />
        </form>
    )
}