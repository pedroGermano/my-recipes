import { PathRoutes } from "@/@types/enums/route.enum";
import RootLayout from "@/components/ui/rootLayout";
import { NotFound } from "@/pages/not-found";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ path: PathRoutes.HOME, element: <h1>Home</h1> },
			{ path: PathRoutes.NEW_RECIPE, element: <h1>Nova Receita</h1> },
			{
				path: PathRoutes.FAVORITE_RECIPES,
				element: <h1>Receitas Favoritas</h1>,
			},
			{ path: PathRoutes.RECIPES, element: <h1>Receitas</h1> },
		],
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);

export function Routes() {
	return <RouterProvider router={router} />;
}
