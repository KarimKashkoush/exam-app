import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();

    const paths = location.pathname
        .split("/")
        .filter(Boolean);

    return (
        <section className="bg-white p-4 w-full">
            <Breadcrumb>
                <BreadcrumbList>
                    {paths.map((path, index) => {
                        const href = "/" + paths.slice(0, index + 1).join("/");

                        if (index === 1) {
                            return (
                                <div key={href} className="flex items-center">
                                    <BreadcrumbSeparator />

                                    <BreadcrumbItem>
                                        <span className="capitalize text-muted-foreground">
                                            Diploma
                                        </span>
                                    </BreadcrumbItem>
                                </div>
                            );
                        }

                        return (
                            <div key={href} className="flex items-center">
                                {index > 0 && <BreadcrumbSeparator />}

                                <BreadcrumbItem>
                                    <BreadcrumbLink
                                        render={
                                            <Link to={href} className="capitalize">
                                                {path}
                                            </Link>
                                        }
                                    />
                                </BreadcrumbItem>
                            </div>
                        );
                    })}
                </BreadcrumbList>
            </Breadcrumb>
        </section>
    );
}