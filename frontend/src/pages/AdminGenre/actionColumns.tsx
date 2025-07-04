import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

interface ActioncolumnProps {
    id: string;
}

export default function Actioncolumn({id}: ActioncolumnProps) {
    return (
        <div className="inline-flex items-center gap-4 p-5">
            <Button size="sm" variant="secondary" asChild>
                <Link to={`/admin/genres/edit/${id}`}>
                    <Edit className="w-4 h-4 mr-2" />
                    Edit
                </Link>
            </Button>
        </div>
    )
}