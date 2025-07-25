import { Badge } from "@/components/ui/badge";
import { dateFormat, rupiahFormat } from "@/lib/utils";
import type { Transaction } from "@/services/customers/customer.type";
import type { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<Transaction>[] = [
    {
        accessorKey: "createdAt",
        header: "Transaction Date",
        cell: ({ row }) => dateFormat(row.original.createdAt),
    },
    {
        accessorKey: "subtotal",
        header: "Subtotal",
        cell: ({ row }) => rupiahFormat(row.original.subtotal),
    },
    {
        accessorKey: "bookingFee",
        header: "Booking Fee",
        cell: ({ row }) => rupiahFormat(row.original.bookingFee),
    },
    {
        accessorKey: "tax",
        header: "Tax",
        cell: ({ row }) => rupiahFormat(row.original.tax),
    },
    {
        accessorKey: "total",
        header: "Total",
        cell: ({ row }) => rupiahFormat(row.original.total),
    },
    {
        accessorKey: "movie",
        header: "Movie",
        cell: ({ row }) => {
            const transactions = row.original;
            
            return (
                <div>
                    <h3 className="mb-2">{transactions.movie.title}</h3>
                    <Badge variant="secondary">{transactions.theater.name}</Badge>
                </div>
            )
        }
    },
    {
        accessorKey: "user",
        header: "Customer",
        cell: ({ row }) => row.original.user.name,
    },
]