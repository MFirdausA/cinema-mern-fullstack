import { Badge } from "@/components/ui/badge"
import type { Theater } from "@/services/auth/theater/theater.types";
import type { ColumnDef } from "@tanstack/react-table"
import Actioncolumn from "./actionColumns";

export const columns: ColumnDef<Theater>[] = [
    {
        accessorKey: "name",
        header: "Theater",
    },
    {
        accessorKey: "city",
        header: "City",
        cell: ({ row }) => <Badge>{row.original.city}</Badge>
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const theater = row.original;

            return <Actioncolumn id={theater._id} />
        },
    },
]