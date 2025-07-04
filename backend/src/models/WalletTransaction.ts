import mongoose from "mongoose";
import Wallet from "./Wallet";

const walletTransactionSchema = new mongoose.Schema({
    Wallet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Wallet",
    },
    price: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "success", "failed"],
    }
})

export default mongoose.model("WalletTransaction", walletTransactionSchema, "walletTransactions");