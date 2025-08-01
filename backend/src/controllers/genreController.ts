import type { Request, Response } from "express";
import Genre from "../models/Genre";
import { genreSchema } from "../utils/zodSchema";

export const getGenres = async (req: Request, res: Response) => {
    try {
        const genres = await Genre.find();

        return res.json({
            data: genres,
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

export const getGenresDetail = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const genre = await Genre.findById(id);

        return res.json({
            data: genre,
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

export const postGenre = async (req: Request, res: Response) => {
    try {
        const body = genreSchema.parse(req.body);

        const genre = new Genre({
            name: body.name,
        });

        const newData = await genre.save();

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

export const putGenre = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const body = genreSchema.parse(req.body);

        await Genre.findByIdAndUpdate(id, {
            name: body.name,
        });

        const updatedData = await Genre.findById(id);

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

export const deleteGenre = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const deletetedData = await Genre.findById(id);

        await Genre.findByIdAndDelete(id);

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