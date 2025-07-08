import TitleHeading from '@/components/titleHeading'
import { DataTable } from '@/components/ui/data-table'
import type { WalletTransaction } from '@/services/customers/customer.type'
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { columns } from './columns'

export default function AdminWalletTransaction() {
    const transactions = useLoaderData() as WalletTransaction[]

    return (
        <>
            <div className="mb-3">
                <TitleHeading title="List Wallet Transaction" />
            </div>
            <div>
                <DataTable columns={columns} data={[]} />
            </div>
        </>
    )
}
