import { Outlet } from "react-router";
import { NavBar } from "../navbar";

const RootLayout: React.FC = () => {
	return (
		<div>
			<NavBar />
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default RootLayout;
