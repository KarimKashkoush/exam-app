import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "@/assets/svg/logo.svg?react";
import { useAuthStore } from "@/features/auth/stroe/authStore";

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

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    GraduationCap,
    User,
    EllipsisVertical,
    UserRound,
    Bolt,
    LogOut,
    FolderCode
} from "lucide-react";
import { Button } from "@/components/ui/button/button";

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
    const navigate = useNavigate();
    const logout = useAuthStore((state) => state.logout);

    const handleLogout = () => {
        logout();
        navigate("/auth/login", { replace: true });
    };

    const user = localStorage.getItem("user");

    const parsedUser = user ? JSON.parse(user).state?.user : null;
    
    return (
        <Sidebar>
            {/* Header */}
            <SidebarHeader className="mb-5 p-10">
                <Link
                    to="/"
                    className="flex items-center gap-2.5"
                >
                    <Logo />
                </Link>

                <p className="text-blue-600 font-semibold text-xl flex gap-1 items-center">
                    <FolderCode className="fill-white"/>Exam App</p>
            </SidebarHeader>

            {/* Links */}
            <SidebarContent className="px-10">
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton className="h-15 p-0 rounded-none">
                                        <NavLink
                                            to={item.url}
                                            className={({ isActive }) =>
                                                `flex items-center gap-2.5 w-full p-4 border transition-colors ${isActive
                                                    ? "bg-blue-100 border-blue-600 text-blue-600"
                                                    : "border-transparent hover:bg-gray-100"
                                                }`
                                            }
                                        >
                                            <item.icon className="w-6 h-6" />
                                            <span className="font-normal text-base font-mono">
                                                {item.title}
                                            </span>
                                        </NavLink>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            {/* Footer */}
            <SidebarFooter className="p-10 pt-0">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <div className="flex items-center justify-between h-auto p-0 gap-2.5 hover:bg-transparent focus:bg-transparent rounded-none">
                            <section className="flex items-center gap-2.5 flex-1 min-w-0">
                                <Avatar className="w-13.5 h-13.5 shrink-0">
                                    <AvatarImage
                                        src="https://github.com/shadcn.png"
                                        alt="@shadcn"
                                        className="rounded-none"
                                    />
                                    <AvatarFallback>AH</AvatarFallback>
                                </Avatar>

                                <section className="flex-1 min-w-0">
                                    <p className="text-blue-600 font-medium text-base">
                                        {parsedUser.firstName}
                                    </p>

                                    <span className="block wrap-break-word text-sm text-gray-500">
                                        {parsedUser.email}
                                    </span>
                                </section>
                            </section>

                            <DropdownMenu>
                                <DropdownMenuTrigger render={<Button variant="outline" className="bg-transparent border-none cursor-pointer"><EllipsisVertical className="text-gray-500" /></Button>} />
                                <DropdownMenuContent className="w-65.75 rounded-none" align="start">
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem className="p-4 text-gray-800 font-normal text-sm hover:rounded-none">
                                            <Link to="/profile" className="w-full flex gap-1.5 items-center">
                                                <UserRound className="text-gray-400" />
                                                Account
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="p-4 font-normal text-sm hover:rounded-none">
                                            <Link to="/dashboard" className="w-full flex gap-1.5 items-center">
                                                <Bolt className="text-gray-400" />
                                                Dashboard
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                            onClick={handleLogout}
                                            className="p-4 text-red-500 font-normal text-sm hover:rounded-none cursor-pointer"
                                        >
                                            <LogOut className="rotate-180" />
                                            Logout
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}