import TitleHeading from '@/components/titleHeading'
import { DataTable } from '@/components/ui/data-table'
import type { Transaction, User } from '@/services/customers/customer.type'
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { columns } from './columns'

export default function AdminTransaction() {
    const transactions = useLoaderData() as Transaction[]

    return (
        <>
            <div className="mb-3">
                <TitleHeading title="List Transaction" />
            </div>
            <div>
                <DataTable columns={columns} data={transactions} />
            </div>
        </>
    )
}
