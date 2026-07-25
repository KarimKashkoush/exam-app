import { Outlet } from "react-router-dom";
import FormCard from "../../components/form-card/form-card";

export default function AuthLayout() {
    return (
        <section className="h-screen flex">
            <section className="hidden lg:flex flex-1">
                <FormCard />
            </section>

            <section className="flex-1">
                <Outlet />
            </section>
        </section>
    );
}