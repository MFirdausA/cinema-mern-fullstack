import TitleHeading from '@/components/titleHeading'
import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/ui/data-table'
import { Plus } from 'lucide-react'
import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { columns } from './columns'
import type { Theater } from '@/services/theater/theater.type'

export default function AdminTheater() {
    const theaters = useLoaderData() as Theater[]


    return (
        <>
        <div className="mb-3">
            <TitleHeading title="List Theater"/>
        </div>
            <div>
                <Button asChild className="mb-3">
                    <Link to="/admin/theaters/create">
                        <Plus className="w-4 h-4" />
                        Add New Theater
                    </Link>
                </Button>
                <DataTable columns={columns} data={theaters} />
            </div>
        </>
    )
}
