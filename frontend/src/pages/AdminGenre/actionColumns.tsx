import { Button } from "@/components/ui/button";
import { deleteGenre } from "@/services/auth/genre/genre.service";
import { useMutation } from "@tanstack/react-query";
import { Edit, Trash } from "lucide-react";
import React from "react";
import { Link, useRevalidator } from "react-router-dom";
import { toast } from "sonner";
interface ActioncolumnProps {
    id: string;
}

export default function Actioncolumn({ id }: ActioncolumnProps) {
    const { isPending, mutateAsync } = useMutation({
        mutationFn: () => deleteGenre(id),
    })

    const revalidator = useRevalidator()

    const handleDelete = async () => {
        try {
            await mutateAsync()
            revalidator.revalidate()
            toast.success("Genre deleted successfully")
        } catch (error) {
            console.log(error)
            toast.error("Failed to delete genre")
        }
    }

    return (
        <div className="inline-flex items-center gap-4 p-5">
            <Button size="sm" variant="secondary" asChild>
                <Link to={`/admin/genres/edit/${id}`}>
                    <Edit className="w-4 h-4 mr-2" />
                    Edit
                </Link>
            </Button>
            <Button size="sm" variant="destructive" onClick={handleDelete} disabled={isPending}>
                <Trash className="w-4 h-4 mr-2" />
                Delete
            </Button>
        </div>
    )
}