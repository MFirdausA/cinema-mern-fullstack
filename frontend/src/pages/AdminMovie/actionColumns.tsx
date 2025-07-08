import { Button } from "@/components/ui/button";
import { deleteMovie } from "@/services/movie/movie.service";
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
        mutationFn: () => deleteMovie(id),
    })

    const revalidator = useRevalidator()

    const handleDelete = async () => {
        try {
            await mutateAsync()
            revalidator.revalidate()
            toast.success("Movie deleted successfully")
        } catch (error) {
            console.log(error)
            toast.error("Failed to delete movie")
        }
    }

    return (
        <div className="inline-flex items-center gap-4 p-5">
            <Button size="sm" variant="secondary" asChild>
                <Link to={`/admin/movies/edit/${id}`}>
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