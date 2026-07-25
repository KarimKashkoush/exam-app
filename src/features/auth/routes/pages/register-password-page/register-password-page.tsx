import Stepper from "@/features/auth/components/register-form/stepper/stepper";
import RegisterPasssword from "../../../components/register-password/register-Passsword";
import { useLocation } from "react-router-dom";

export default function RegisterPasswordPage() {
    const { state } = useLocation();
    console.log(state);
    return (
        <section className="flex flex-col justify-center h-screen max-w-2xl mx-auto px-8 py-28" >
            <Stepper steps={4} currentStep={4} />
            <h2 className="text-3xl font-bold mb-6">
                Create a strong password
            </h2>

            <h3 className="text-blue-600 text-2xl font-bold font-inter mb-6">
                Create a strong password
            </h3>


            <RegisterPasssword />


        </section>
    )
}
