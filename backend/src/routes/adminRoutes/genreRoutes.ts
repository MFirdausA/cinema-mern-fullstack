import express from "express";
import { deleteGenre, getGenres, getGenresDetail, postGenre, putGenre } from "../../controllers/genreController";
import { validateRequest } from "../../middlewares/validateRequest";
import { genreSchema } from "../../utils/zodSchema";

const genreRoutes = express.Router();

genreRoutes.get("/genres", getGenres);
genreRoutes.get("/genres/:id", getGenresDetail);
genreRoutes.post("/genres", validateRequest(genreSchema), postGenre);
genreRoutes.put("/genres/:id", validateRequest(genreSchema), putGenre);
genreRoutes.delete("/genres/:id", deleteGenre);

export default genreRoutes;
