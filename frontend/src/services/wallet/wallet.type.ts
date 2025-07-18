export interface WalletTransaction {
    _id: string
    price: number
    status: string
}

export interface WalletTopup {
    topup: string
    redirect_url: string
}