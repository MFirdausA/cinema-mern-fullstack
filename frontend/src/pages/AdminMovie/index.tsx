import TitleHeading from '@/components/titleHeading'
import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/ui/data-table'
import type { Movie } from '@/services/movie/movie.type'
import { Plus } from 'lucide-react'
import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { columns } from './columns'

export default function AdminMovie() {
    const movies = useLoaderData() as Movie[]

    return (
        <>
            <div className="mb-3">
                <TitleHeading title="List movies" />
            </div>
            <div>
                <Button asChild className="mb-3">
                    <Link to="/admin/movies/create">
                        <Plus className="w-4 h-4" />
                        Add New Movie
                    </Link>
                </Button>
                <DataTable columns={columns} data={movies} />
            </div>
        </>
    )
}
