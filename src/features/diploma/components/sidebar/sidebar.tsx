import {
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

import { Link } from "react-router-dom";
import {
    GraduationCap,
    User,
    LogOut,
} from "lucide-react";

import Logo from "@/assets/images/logo.png";

const items = [
    {
        title: "Diplomas",
        url: "/",
        icon: GraduationCap,
    },
    {
        title: "Account Settings",
        url: "/profile",
        icon: User,
    },
];

export function AppSidebar() {
    return (
        <Sidebar>
            {/* Header */}
            <SidebarHeader>
                <Link
                    to="/"
                    className="flex items-center gap-3 px-4 py-3"
                >
                    <img src={Logo} alt="Logo" className="w-8 h-8" />
                    <span className="font-bold text-lg">
                        Exam App
                    </span>
                </Link>
            </SidebarHeader>

            {/* Links */}
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton className="h-14">
                                        <Link to={item.url} className="flex items-center gap-2.5 w-full bg-blue-100 p-4  border border-blue-600">
                                            <item.icon className="w-6 h-6" />
                                            <span className="font-normal text-base font-mono">{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            {/* Footer */}
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <LogOut />
                            <span>Logout</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}