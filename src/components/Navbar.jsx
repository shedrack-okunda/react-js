import { Link } from "react-router-dom";
import { ThemeToggle } from "../context/ThemeContext";

const Navbar = () => (
	<nav className="bg-white dark:bg-gray-800 shadow">
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
			<Link
				to="/"
				className="text-xl font-bold text-blue-600 dark:text-blue-400">
				Task Manager
			</Link>

			<div className="flex gap-4">
				<Link
					to="/"
					className="text-gray-700 dark:text-gray-300 hover: cursor-pointer">
					Home
				</Link>

				<ThemeToggle />
			</div>
		</div>
	</nav>
);

export default Navbar;
