import { privateInstance } from "@/lib/axios";
import type { BaseResponse } from "@/types/response";
import type { Genre } from "../genre/genre.type";
import type { Movie } from "../movie/movie.type";
import type { MovieExplore } from "./global.type";

export const getMovies = async (): Promise<BaseResponse<Movie[]>> => 
    privateInstance.get("/customer/movies").then(res => res.data);

export const getGenres = async (): Promise<BaseResponse<Pick<Genre, "_id" | "name">[]>> => 
    privateInstance.get("/customer/genres").then(res => res.data);

export const getMoviesByGenre = async (genreId : string): Promise<BaseResponse<MovieExplore>> => 
    privateInstance.get(`/customer/browse-movies/${genreId}`).then(res => res.data);