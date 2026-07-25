import RegisterForm from "../../../components/register-form/form";

export default function RegisterPage() {
    return (
        <section className="flex flex-col justify-center h-screen max-w-2xl mx-auto px-8 py-28">
            <h2 className="mb-4 text-3xl font-bold">
                Create Account
            </h2>
            <RegisterForm />
        </section>
    )
}
