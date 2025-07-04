import AdminLoginPage from "@/components/login-form";
export default function index() {
    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <AdminLoginPage />
            </div>
        </div>
    )
}