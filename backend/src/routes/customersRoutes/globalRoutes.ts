import  express  from "express";
import { getAvailableSeats, getMovieDetail, getMovies, getMoviesFilter } from "../../controllers/globalController";
import { getGenres } from "../../controllers/globalController";
import { validateRequest } from "../../middlewares/validateRequest";
import { transactionSchema } from "../../utils/zodSchema";
import { getOrders, getOrdersDetail, transactionTicket } from "../../controllers/ticketController";

const globalRoutes = express.Router();

globalRoutes.get("/movies", getMovies);
globalRoutes.get("/genres", getGenres);
globalRoutes.get("/movies/:id", getMovieDetail);
globalRoutes.get("/check-seats/:movieId", getAvailableSeats);
globalRoutes.get("/browse-movies/:genreId", getMoviesFilter);
globalRoutes.post("/transaction/buy", validateRequest(transactionSchema), transactionTicket);
globalRoutes.get("/orders", getOrders);
globalRoutes.get("/orders/:id", getOrdersDetail);

export default globalRoutes;