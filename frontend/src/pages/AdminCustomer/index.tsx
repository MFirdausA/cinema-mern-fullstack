import TitleHeading from '@/components/titleHeading'
import { DataTable } from '@/components/ui/data-table'
import type { User } from '@/services/customers/customer.type'
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { columns } from './columns'

export default function AdminCustomer() {
    const customers = useLoaderData() as User[]

    return (
        <>
            <div className="mb-3">
                <TitleHeading title="List customers" />
            </div>
            <div>
                <DataTable columns={columns} data={customers} />
            </div>
        </>
    )
}
