import { getSession } from "@/lib/utils";
import CustomerBrowseGenre from "@/pages/CustomerBrowseGenre";
import CustomerHome from "@/pages/CustomerHome";
import CustomerSignIn from "@/pages/CustomerSignIn";
import CustomerSignUp from "@/pages/CustomerSignUp";
import { getGenres, getMovies } from "@/services/global/global.service";
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
        element: <CustomerBrowseGenre />,
    }

]

export default customerRoutes;