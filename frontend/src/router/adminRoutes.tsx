import { redirect, type RouteObject } from "react-router-dom";
import AdminLoginPage from "../pages/AdminLoginPage";
import AdminOverview from "@/pages/AdminOverview";
import AdminLayout from "@/components/adminLayout";
import { getSession } from "@/lib/utils";
import AdminGenre from "@/pages/AdminGenre";
import { getDetailGenre, getGenres } from "@/services/genre/genre.service";
import AdminGenreForm from "@/pages/AdminGenre/form";
import AdminTheater from "@/pages/AdminTheater";
import { getDetailTheater, getTheaters } from "@/services/theater/theater.service";
import AdminTheaterForm from "@/pages/AdminTheater/form";
import { getDetailMovie, getMovies } from "@/services/movie/movie.service";
import AdminMovie from "@/pages/AdminMovie";
import AdminMovieForm from "@/pages/AdminMovie/form";
import { getCustomers, getTransactions, getWalletTransactions } from "@/services/customers/customer.service";
import AdminCustomer from "@/pages/AdminCustomer";
import AdminTransaction from "@/pages/AdminTransaction";
import AdminWalletTransaction from "@/pages/AdminWalletTransaction";

const adminRoutes: RouteObject[] = [
    {
        path: "/admin/login",
        element: <AdminLoginPage />
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        loader: () => {
            const user = getSession();
            console.log(user);

            if (!user || user?.role !== "admin") {
                throw redirect("/admin/login")
            }

            return user;
        },
        children: [
            {
                index: true,
                element: <AdminOverview />
            },
            {
                path: "/admin/genres",
                loader: async () => {
                    const genres = await getGenres();

                    return genres.data;
                },
                element: <AdminGenre />
            },
            {
                path: "/admin/genres/create",
                element: <AdminGenreForm />
            },
            {
                path: "/admin/genres/edit/:id",
                loader: async ({ params }) => {
                    if (!params.id) {
                        throw redirect("/admin/genres");
                    }

                    const detail = await getDetailGenre(params.id);

                    return detail.data
                },
                element: <AdminGenreForm />
            },
            {
                path: "/admin/theaters",
                loader: async () => {
                    const theaters = await getTheaters();

                    return theaters.data;
                },
                element: <AdminTheater />,
            },
            {
                path: "/admin/theaters/create",
                element: <AdminTheaterForm />
            },
            {
                path: "/admin/theaters/edit/:id",
                loader: async ({ params }) => {
                    if (!params.id) {
                        throw redirect("/admin/theaters");
                    }

                    const detail = await getDetailTheater(params.id);

                    return detail.data
                },
                element: <AdminTheaterForm />
            },
            {
                path: "/admin/movies",
                loader: async () => {
                    const movies = await getMovies();

                    return movies.data;
                },
                element: <AdminMovie />
            },
            {
                path: "/admin/movies/create",
                loader: async () => {
                    const genres = await getGenres();
                    const theaters = await getTheaters();

                    return{
                        genres: genres.data,
                        theaters: theaters.data,
                        detail: null
                    }
                },
                element: <AdminMovieForm />
            },
            {
                path: "/admin/movies/edit/:id",
                loader: async ({ params }) => {
                    if (!params.id) {
                        throw redirect("/admin/movies");
                    }
                    const theaters = await getTheaters();
                    const genres = await getGenres();
                    const detail = await getDetailMovie(params.id);

                    return{
                        genres: genres.data,
                        theaters: theaters.data,
                        detail: detail.data
                    }
                },
                element: <AdminMovieForm />
            },
            {
                path: "/admin/customers",
                loader: async () => {
                    const customers = await getCustomers();

                    return customers.data;
                },
                element: <AdminCustomer />
            },
            {
                path: "/admin/transactions",
                loader: async () => {
                    const transactions = await getTransactions();

                    return transactions.data;
                },
                element: <AdminTransaction />
            },
            {
                path: "/admin/wallet-transactions",
                loader: async () => {
                    const transactions = await getWalletTransactions();

                    return transactions.data;
                },
                element: <AdminWalletTransaction />
            },
        ]
    }
]

export default adminRoutes