import type { Request, Response } from "express";
import Theater from "../models/Theater";
import { theaterSchema } from "../utils/zodSchema";
export const getTheaters = async (req: Request, res: Response) => {
    try {
        const theater = await Theater.find();

        return res.json({
            data: theater,
            message: "Success get data",
            status: "Success",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Failed get data",
            data: null,
            status: "Failed",
        });
    }
};

export const getTheaterDetail = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const theater = await Theater.findById(id);

        return res.json({
            data: theater,
            message: "Success get data detail",
            status: "Success",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Failed get data detail",
            data: null,
            status: "Failed",
        });
    }
};

export const postTheater = async (req: Request, res: Response) => {
    try {
        const body = theaterSchema.parse(req.body);

        const theater = new Theater({
            name: body.name,
            city: body.city,
        });

        const newData = await theater.save();

        return res.json({
            message: "Success to create data",
            data: newData,
            status: "Success",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Failed to create data",
            data: null,
            status: "Failed",
        });
    }
};

export const putTheater = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const body = theaterSchema.parse(req.body);

        await Theater.findByIdAndUpdate(id, {
            name: body.name,
            city: body.city,
        });

        const updatedData = await Theater.findById(id);

        return res.json({
            message: "Success to update data",
            data: updatedData,
            status: "Success",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Failed to update data",
            data: null,
            status: "Failed",
        });
    }
};

export const deleteTheater = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const deletetedData = await Theater.findById(id);

        await Theater.findByIdAndDelete(id);

        return res.json({
            message: "Success to deleted data",
            data: deletetedData,
            status: "Success",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Failed to deleted data",
            data: null,
            status: "Failed",
        });
    }
};
