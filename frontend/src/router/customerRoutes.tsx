import { getSession } from "@/lib/utils";
import CustomerBrowseGenre from "@/pages/CustomerBrowseGenre";
import CustomerHome from "@/pages/CustomerHome";
import CustomerMovieDetail from "@/pages/CustomerMovieDetail";
import CustomerOrderDetail from "@/pages/CustomerOrderDetail";
import CustomerOrders from "@/pages/CustomerOrders";
import CustomerSettings from "@/pages/CustomerSettings";
import CustomerSignIn from "@/pages/CustomerSignIn";
import CustomerSignUp from "@/pages/CustomerSignUp";
import CustomerTransaction from "@/pages/CustomerTransaction";
import CustomerTransactionSucess from "@/pages/CustomerTransactionSucess";
import CustomerWallet from "@/pages/CustomerWallet";
import CustomerWalletTopup from "@/pages/CustomerWalletTopup";
import CustomerWalletTopupSuccess from "@/pages/CustomerWalletTopupSuccess";
import { getTransactions } from "@/services/customers/customer.service";
import { getDetailMovie, getGenres, getMovies } from "@/services/global/global.service";
import { getTheaters } from "@/services/theater/theater.service";
import { getOrderDetail, getOrders } from "@/services/transaction/transaction.service";
import { redirect, type RouteObject } from "react-router-dom";

const customerRoutes: RouteObject[] = [
    {
        path: "/sign-up",
        element: <CustomerSignUp />
    },
    {
        path: "/sign-in",
        element: <CustomerSignIn />
    },
    {
        path: "/",
        loader: async () => {
            const user = getSession();

            if (!user || user.role !== "customer") {
                return redirect("/sign-in");
            }

            const genres = await getGenres()
            const movies = await getMovies()
            return {
                movies: movies.data,
                genres: genres.data,
            };
        },
        element: <CustomerHome />
    },
    {
        path: "/browse/:genreId",
        loader: async ({ params }) => {
            const user = getSession();

            if (!user || user.role !== "customer") {
                return redirect("/sign-in");
            }

            if (!params.genreId) {
                throw redirect("/")
            }

            const genres = await getGenres();
            const theaters = await getTheaters("customer");

            console.log({
                genres,
                theaters
            })
            return {
                genres: genres.data,
                theaters: theaters.data
            }
        },
        element: <CustomerBrowseGenre />,
    },
    {
        path: "/movie/:movieId",
        loader: async ({ params }) => {
            const user = getSession();

            if (!user || user.role !== "customer") {
                return redirect("/sign-in");
            }

            if (!params.movieId) {
                throw redirect("/")
            }
            const movieDetail = await getDetailMovie(params.movieId);

            return {
                detail: movieDetail.data.movie,
            }
        },
        element: <CustomerMovieDetail />,
    },
    {
        path: "/transaction-ticket",
        loader: async () => {
            const user = getSession();

            if (!user || user.role !== "customer") {
                return redirect("/sign-in");
            }

            return true
        },
        element: <CustomerTransaction />,
    },
    {
        path: "/transaction-ticket/success",
        loader: async () => {
            const user = getSession();

            if (!user || user.role !== "customer") {
                return redirect("/sign-in");
            }

            return true
        },
        element: <CustomerTransactionSucess />,
    }, 
    {
        path: "/wallets",
        loader: async () => {
            const user = getSession();

            if (!user || user.role !== "customer") {
                return redirect("/sign-in");
            }

            return true
        },
        element: <CustomerWallet />
    },
    {
        path: "/wallets/topup",
        loader: async () => {
            const user = getSession();

            if (!user || user.role !== "customer") {
                return redirect("/sign-in");
            }

            return true
        },
        element: <CustomerWalletTopup />
    },
    {
        path: "/wallets/topup/success",
        loader: async () => {
            const user = getSession();

            if (!user || user.role !== "customer") {
                return redirect("/sign-in");
            }

            return true
        },
        element: <CustomerWalletTopupSuccess />
    },
    {
        path: "/orders",
        loader: async () => {
            const user = getSession();

            if (!user || user.role !== "customer") {
                return redirect("/sign-in");
            }

            const transactions = await getOrders();

            return transactions.data;
        },
        element: <CustomerOrders />
    },
    {
        path: "/orders/:orderId",
        loader: async ({ params }) => {
            const user = getSession();

            if (!user || user.role !== "customer") {
                return redirect("/sign-in");
            }

            if (!params.orderId) {
                throw redirect("/orders");
            }

            const transaction = await getOrderDetail(params.orderId);

            return transaction.data;
        },
        element: <CustomerOrderDetail />
    },
    {
        path: "/settings",
        loader: async () => {
            const user = getSession();

            if (!user || user.role !== "customer") {
                return redirect("/sign-in");
            }

            return true;
        },
        element: <CustomerSettings />
    },

]

export default customerRoutes;