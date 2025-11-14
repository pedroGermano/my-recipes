import { PathRoutes } from "@/@types/enums";
import { Link, useNavigate } from "react-router";
export const NavBar = () => {
	const navigate = useNavigate();

	const onClick = () => {
		navigate(PathRoutes.NEW_RECIPE);
	};
	return (
		<nav className="bg-white border-b border-gray-200 px-12 py-6 flex justify-between items-center">
			<div className="flex items-center space-x-6">
				<Link
					to={PathRoutes.HOME}
					className="text-2xl font-bold text-orange-500"
				>
					MyRecipes
				</Link>
				<Link
					to={PathRoutes.FAVORITE_RECIPES}
					className="text-sm text-gray-700 hover:text-orange-600"
				>
					Receitas favoritas
				</Link>
			</div>
			<div>
				<button
					type="button"
					onClick={onClick}
					className="bg-orange-600 hover:opacity-80 text-white font-semibold w-44 py-2 rounded-lg cursor-pointer"
				>
					Nova Receita
				</button>
			</div>
		</nav>
	);
};
