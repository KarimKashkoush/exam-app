import { Outlet } from 'react-router-dom'
import Navbar from '../../../shared/components/navbar/navbar'
import { AppSidebar } from '../../../shared/components/sidebar/sidebar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'


export default function ExamLayout() {
    return (
        <SidebarProvider>
            <AppSidebar />

            <SidebarInset>
                <section className="flex-1">
                    <Navbar />
                    <main className="flex-1">
                        <Outlet />
                    </main>
                </section>
            </SidebarInset>
        </SidebarProvider>
    );
}