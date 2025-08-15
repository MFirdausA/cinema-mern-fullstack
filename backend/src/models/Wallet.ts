import mongoose from "mongoose";
import User from "./User";

const WalletSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    balance: {
        type: Number,
        default: 0
    }
})

export default mongoose.model("Wallet", WalletSchema, "wallets");