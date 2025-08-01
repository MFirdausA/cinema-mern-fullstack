import {
    Bell,
    Clapperboard,
    DollarSign,
    Home,
    Package,
    Package2,
    Theater,
    User,
    Wallet,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export const description =
    "A products dashboard with a sidebar navigation and a main content area. The dashboard has a header with a search input and a user menu. The sidebar has a logo, navigation links, and a card with a call to action. The main content area shows an empty state with a call to action."


export default function Sidebar() {
    return (
        <div className="hidden border-r bg-muted/40 md:block">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                        <Link to="/" className="flex items-center gap-2 font-semibold">
                            <Package2 className="h-6 w-6" />
                            <span className="">Acme Inc</span>
                        </Link>
                        <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                            <Bell className="h-4 w-4" />
                            <span className="sr-only">Toggle notifications</span>
                        </Button>
                    </div>
                    <div className="flex-1">
                        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                            <Link
                                to="/admin"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                                <Home className="h-4 w-4" />
                                Dashboard
                            </Link>
                            <Link
                                to="/admin/genres"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                                <Package className="h-4 w-4" />
                                Genre{" "}
                            </Link>
                            <Link
                                to="/admin/theaters"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                                <Theater className="h-4 w-4" />
                                Theater{" "}
                            </Link>
                            <Link
                                to="/admin/movies"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                                <Clapperboard className="h-4 w-4" />
                                Movies{" "}
                            </Link>
                            <Link
                                to="/admin/customers"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                                <User className="h-4 w-4" />
                                Customer List{" "}
                            </Link>
                            <Link
                                to="/admin/transactions"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                                <DollarSign className="h-4 w-4" />
                                Transaction List{" "}
                            </Link>
                            <Link
                                to="/admin/wallet-transactions"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                                <Wallet className="h-4 w-4" />
                                Wallet Transaction {" "}
                            </Link>
                        </nav>
                    </div>

                </div>
            </div>
    )
}