import { Outlet } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar";
import { Toaster } from "sonner";


export default function AdminLayout() {
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <Sidebar />
            <div className="flex flex-col">
                <Header />
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                    {/* <div className="flex items-center">
                        <h1 className="text-lg font-semibold md:text-2xl"><Outlet /></h1>
                    </div> */}
                        <h1 className="text-lg font-semibold md:text-2xl"><Outlet /></h1>
                </main>
            </div>
            <Toaster />
        </div>
    )
}