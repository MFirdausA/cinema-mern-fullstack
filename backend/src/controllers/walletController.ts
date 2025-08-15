import type { Response } from "express";
import Wallet from "../models/Wallet";
import { CustomRequest } from "../types/Request";
import WalletTransaction from "../models/WalletTransaction";
import { topupSchema } from "../utils/zodSchema";

export const getBalance = async (req: CustomRequest, res : Response) => {
    try {
        const wallet = await Wallet.findOne({ 
            user: req.user?.id 
        });

        return res.json({
            status: true,
            message: "Success get data",
            data: {
                userId: wallet?.user,
                balance: wallet?.balance ?? 0
                
            }
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Failed get data",
            data: null,
            status: "Failed",
        });
    }
}

export const getTopupHistory = async (req: CustomRequest, res : Response) => {
    try {
        const  wallet = await Wallet.findOne({
            user: req.user?.id
        })

        const data = await WalletTransaction.find({
            wallet: wallet?._id
        }).select("wallet price createdAt status");

        return res.json({
            status: true,
            message: "Success get data",
            data: data
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Failed get data history",
            data: null,
            status: "Failed",
        });
    }
}

export const topupBalance = async (req: CustomRequest, res : Response) => {
    try {
        const parse = topupSchema.parse(req.body);

        const midtransUrl = process.env.MIDTRANS_TRANSACTION_URL ?? "";
        const midtransAuth = process.env.MIDTRANS_AUTH_STRING ?? "";
        
        let wallet = await Wallet.findOne({ 
            user: req?.user?.id 
        });

        if (!wallet) {
            wallet = await Wallet.create({
                user: req.user?.id,
                balance: 0
            });
        }

        const topup = await WalletTransaction.create({
            wallet: wallet?._id,
            user: req.user?.id,
            price: parse.balance,
            status: "pending"
        })

        const midtransRequest = new Request(midtransUrl, {
            method: "POST",
            body: JSON.stringify({
                transaction_details: {
                order_id: topup.id,
                gross_amount: parse.balance
            },
                credit_card:{
                    "secure" : true
                },
                customer_details: {
                email: req.user?.email,
                },
                callbacks: {
                    finish: process.env.SUCCESS_PAYMENT_REDIRECT
                }
            }),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Basic ${midtransAuth}`
            }
        })

        const midtransResponse = await fetch(midtransRequest);
        const midtransJson = await midtransResponse.json();

        await topup.save();

        return res.json({
            status: true,
            message: "topup success",
            data: midtransJson
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Failed to topup balance",
            data: null,
            status: "Failed",
        });
    }
}

export const handleTopupBalance = async (req: Request, res: Response) => {
	try {
		const body = req.body;

		const orderId = body.order_id;

		switch (body.transaction_status) {
			case "capture":
			case "settlement": {
				const walletTransaction = await WalletTransaction.findById(orderId);
				const wallet = await Wallet.findById(walletTransaction?.wallet);

				await WalletTransaction.findByIdAndUpdate(orderId, {
					status: "success",
				});

				const currentBalance = wallet?.balance ?? 0;
				const additionalBalance = walletTransaction?.price ?? 0;

				await Wallet.findByIdAndUpdate(wallet?.id, {
					balance: currentBalance + additionalBalance,
				});

				break;
			}

			case "deny":
			case "cancel":
			case "expire":
			case "failure": {
				await WalletTransaction.findByIdAndUpdate(orderId, {
					status: "failed",
				});

				break;
			}

			default:
				break;
		}

		return res.json({ status: true });
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			message: "Failed to topup balance",
			data: null,
			status: "failed",
		});
	}
};