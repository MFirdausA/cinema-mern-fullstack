import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { Button } from "@/components/ui/button";
import { Link, useLoaderData } from "react-router-dom";
import { Plus } from "lucide-react";
import TitleHeading from "@/components/titleHeading";
import type { Genre } from "@/services/genre/genre.type";

export default function AdminGenre() {
    const genres = useLoaderData() as Genre[]

    return (
        <>
        <div className="mb-3">
            <TitleHeading title="List Genre"/>
        </div>
            <div>
                <Button asChild className="mb-3">
                    <Link to="/admin/genres/create">
                        <Plus className="w-4 h-4" />
                        Add New Genre
                    </Link>
                </Button>
                <DataTable columns={columns} data={genres} />
            </div>
        </>
    );
}