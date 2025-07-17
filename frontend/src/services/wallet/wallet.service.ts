import type { BaseResponse } from "@/types/response";
import type { WalletTransaction } from "./wallet.type";
import { privateInstance } from "@/lib/axios";

export const getWalletTransactions = async (): Promise<BaseResponse<WalletTransaction[]>> =>
    privateInstance.get("/customer/topup-history").then((res) => res.data);