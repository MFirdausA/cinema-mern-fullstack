import express from "express";
import multer from "multer";
import { createMovie, deleteMovie, getMovieDetail, getMovies, updateMovie } from "../../controllers/movieController";
import { imageFilter, thumbnailStorage } from "../../utils/multer";
import { get } from "node:http";

const upload = multer({storage: thumbnailStorage(), fileFilter: imageFilter});

const movieRoutes = express.Router();

movieRoutes.get("/movies", getMovies);
movieRoutes.get("/movies/:id", getMovieDetail);
movieRoutes.post("/movies", upload.single("thumbnail"), createMovie);
movieRoutes.put("/movies/:id", upload.single("thumbnail"), updateMovie);
movieRoutes.delete("/movies/:id", deleteMovie);

export default movieRoutes;