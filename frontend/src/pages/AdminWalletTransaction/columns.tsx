import { Badge } from "@/components/ui/badge";
import { dateFormat, rupiahFormat } from "@/lib/utils";
import type { WalletTransaction } from "@/services/customers/customer.type";
import type { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<WalletTransaction>[] = [
    {
        accessorKey: "createdAt",
        header: "Transaction Date",
        cell: ({ row }) => dateFormat(row.original.createdAt),
    },
    {
        accessorKey: "price",
        header: "Price",
        cell: ({ row }) => rupiahFormat(row.original.price),
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => <Badge>{row.original.status}</Badge>
    },
    {
        accessorKey: "wallet",
        header: "Customer name",
        cell: ({ row }) => row.original.wallet.user.name,
    },
]